//Import Modules

const express = require('express');
const app = express();

const bodyParaser = require('body-parser');

//Import Routes

const userRoute = require('./controllers/user');
const loginRoute = require('./controllers/login');
const productRoute = require('./controllers/product');
const reviewRoute = require('./controllers/review');

//Route Middleware

app.use('/',(req,res) => {
    res.status(400).send("Url not found!");
});

module.exports = function(app){
    app.use(bodyParaser.text())
    app.use('/api/userRoute',userRoute);
    app.use('/api/auth',loginRoute);
    app.use('/api/productRoute',productRoute);
    app.use('/api/reviewRoute',reviewRoute);
    app.all('*',(req,res)=>{
        res.send('OOPs Wrong URL!');
    });
}