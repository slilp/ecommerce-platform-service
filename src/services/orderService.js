const db = require('../models');

async function insertOrder(request, user) {

    let cart = Object.assign({}, request);
    let cartItems = Object.assign([], request.items);

    cart.customerId = user;

    const result = await db.sequelize.transaction(async (t) => {

        const insertNewOrder = await db.Order.create(cart, {
            transaction: t
        });

        cartItems = cartItems.map(value => ({
            orderId: insertNewOrder.orderId,
            ...value
        }));

        const insertItems = await db.OrderCart.bulkCreate(
            [...cartItems], {
                transaction: t
            });

        return insertNewOrder;
    });

    return result;
}


async function searchCustomerOrder(user,status,index,size) {

    const query = await db.Order.findAndCountAll({
        where: {
            customerId: user,
            orderStatus: status
        },
        order: [
            ['orderDate', 'DESC']
        ],
        offset: size * index,
        limit: size * 1,
        attributes: [
            'orderId',
            'orderDate',
            'orderStatus'
        ],
        include:{
            model: db.OrderCart,
            as : 'orderCart',
            attributes: [
                'quantity',
                'productId'
            ],
            include:{
                model: db.ProductInfo,
                as : 'productInfo',
                attributes:[
                    'productName'
                ]
            }
        }
    });

    return query;
}


module.exports = {
    insertOrder,
    searchCustomerOrder
}