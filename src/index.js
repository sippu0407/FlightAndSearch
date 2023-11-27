const express=require('express');
const bodyParser=require('body-parser');

const db=require('./models/index');
const {PORT}=require('./config/severConfig');
const apiRoutes=require('./routes/index');

//test
const {City,Airport}=require('./models/index');

const setupAndStartServer=async()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',apiRoutes);

    app.listen(PORT,async ()=>{
       console.log(`server is running on PORT : ${PORT}`); //writing in tempelated string.

       if(process.env.SYNC_DB){
         db.sequelize.sync({alter:true});  // we have to do sync 1-time
       }

     
   })

}

setupAndStartServer();