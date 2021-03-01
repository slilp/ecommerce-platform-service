const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const db = require('./models');
const routes = require('./routes');
const passport = require('./passport');
const session = require('express-session');

// const { route } = require('./routes');

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3000;


app.get('/handcheck',(req,res)=>{
    res.json({status:true});
});


app.use('/api',routes);

app.use((req,res)=>{
    res.status(404).send('ECOMMERCE-PLATFORM-API');
});



db.sequelize.sync({force : false ,  timestamps: false, }).then(()=>{
    app.listen(port,()=>{
        console.log(`app is running on port ${port}`);
    });
}).catch((error)=>{
    console.log(`error connection with db ${error}`);
});
