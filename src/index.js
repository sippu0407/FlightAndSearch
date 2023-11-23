const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/severConfig');

// const {City}=require('./models/index');
const cityRepo=require('./repository/city-repository');

const setupAndStartServer=async()=>{

    //intialize express app
    const app=express();
    //making middleware available for all routes so using it globally
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,async ()=>{
       const repo=new cityRepo();
       await  repo.createCity({name:"varanasi"});
       await repo.deleteCityById(9);
       const data={name:"kashi"};
       await repo.updateCity({cityId:10,data:data});
        // repo.updateCity({cityid:12,data:data}); this will give error b/c cityid is not what we have to pass to destructured object


      await repo.deleteAllCities();

       console.log(`server is running on PORT : ${PORT}`); //writing in tempelated string.


    })

}

setupAndStartServer();