const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/severConfig');
const apiRoutes=require('./routes/index');


const setupAndStartServer=async()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',apiRoutes);

    app.listen(PORT,async ()=>{
       console.log(`server is running on PORT : ${PORT}`); //writing in tempelated string.
   })

}

setupAndStartServer();