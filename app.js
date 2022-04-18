const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./router/users.router')
require('dotenv/config')
require('./dbconfig/db')
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', userRouter);

app.get('/', (req,res)=>{
    res.json({status:404,message:"route unavailable!"})
})
app.get('*', (req,res)=>{
    res.json({status:404,message:"route unavailable!"})
})

app.listen(port);
console.log('Magic happens on port ' + port);
