const express=require('express');

require('./config/severConfig');
const setupAndStartServer=async()=>{

    //intialize express app
    const app=express();
    const PORT=3000;

    app.listen(PORT,()=>{
        
        console.log(process.env);
        console.log(`server is running on PORT : ${PORT}`); //writing in tempelated string.
    })

}

setupAndStartServer();