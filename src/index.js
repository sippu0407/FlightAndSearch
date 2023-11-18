const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/severConfig');

const {City}=require('./models/index');

const setupAndStartServer=async()=>{

    //intialize express app
    const app=express();
    //making middleware available for all routes so using it globally
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        
        console.log(City);
        console.log(`server is running on PORT : ${PORT}`); //writing in tempelated string.

        
    })

}

setupAndStartServer();