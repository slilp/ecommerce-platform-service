const customerService = require('../services/customerService');
const bcryptPassword = require('../utils/bcryptPassword');
const tokenGenerator = require('../utils/tokenGenerator');
const {
    v4: uuid
} = require('uuid');
const url = require('url');    

function customerValidation(action) {
    switch (action) {
        case 'register':
            return []
        case 'login':
            return []
        default:
            return []
    }
}

async function register(req, res) {
    try {
        const user = await customerService.getUserByUsername(req.body.username);

        if (user) {
            return res.status(409).json({
                status: false,
                statusCode: 'ECOM-409',
                message: 'duplicate data'
            });
        }

        const passHash = await bcryptPassword.hashPassword(req.body.password);

        req.body.password = passHash;
        req.body.customerId = uuid();

        const insert = await customerService.insertCustomer(req.body);

        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: insert
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 'ECOM-500',
            message: error.message
        });
    }

}

async function login(req, res) {
    try {

        const user = await customerService.getUserByUsername(req.body.username);
        if (!user) {
            return res.status(400).json({
                status: false,
                statusCode: 'ECOM-401',
                message: 'invalid username or password'
            });
        }

        const checkPass = await bcryptPassword.verifyPassword(req.body.password, user.password);

        if (!checkPass) {
            return res.status(400).json({
                status: false,
                statusCode: 'ECOM-401',
                message: 'invalid username or password'
            });
        }

        const token = tokenGenerator.tokenGenerator(user);

        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: {
                customerInfo:{
                    firstName : user.firstName,
                    lastName: user.lastName,
                    profile: user.profileImagePath
                },
                accessToken: token
            }
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 'ECOM-500',
            message: error.message
        });
    }

}

async function facebook(req, res) {

    const checkUser = await customerService.getUserByUsername(req.user.id);

    //already have facebook user
    if (checkUser) {

        const token = tokenGenerator.tokenGenerator(checkUser);

        res.redirect(url.format({
            pathname: "http://localhost:3000/login",
            query: {
                "t": token
            }
        }));

    } else {

        //register new user

        const createUser = {
            customerId: uuid(),
            username: req.user.id,
            password: null,
            firstName: req.user.displayName,
            lastName: null,
            email: null,
            mobile: null,
            facebook: null,
            profileImagePath: null,
            line: null,
            registerDate: new Date()
        };

        const insert = await customerService.insertCustomer(createUser);

        if (insert) {

            const token = tokenGenerator.tokenGenerator(insert);

            res.redirect(url.format({
                pathname: "http://localhost:3000/login",
                query: {
                    "t": token
                }
            }));
        } else {

            res.redirect(url.format({
                pathname: "http://localhost:3000/login",
                query: {
                    "error": 'error facebook'
                }
            }));
        }
    }
}


async function info(req, res) {
    try {

        const user = await customerService.getUserById(req.user);
        if (!user) {
            return res.status(400).json({
                status: false,
                statusCode: 'ECOM-404',
                message: 'not found'
            });
        }

        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 'ECOM-500',
            message: error.message
        });
    }

}

module.exports = {
    customerValidation,
    register,
    login,
    info,
    facebook
}