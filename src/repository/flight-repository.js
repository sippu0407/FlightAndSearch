const {Flight}=require('../models/index');
const {Op}=require('sequelize');

class FlightRepository{

#createFilter(data){
    
    // arrival time , minPrice , maxPrice

    let filter={};

    if(data.arrivalTime) filter.arrivalTime=data.arrivalTime;

    if(data.minPrice && data.maxPrice){

        Object.assign(
            filter,{
                    [Op.and]:[
                        
                        {price:{[Op.gte]:data.minPrice}},
                        {price:{[Op.lte]:data.maxPrice}}         
                ]
            } 
        );

    }

  if(data.minPrice){ 
    filter.price={[Op.gte]:data.minPrice};
  } 

  if(data.maxPrice){ 
    filter.price={[Op.lte]:data.maxPrice}
 } 


 return filter;

}    

async createFlight(data){

    try {

        const flight=await Flight.create(data);
        return flight;
        
    } catch (error) {
        console.log("error ocurred in flight repository");
        throw {error};
        
    }
}

async getFlight(flightId){

    try {
             
     const flight=await Flight.findByPk(flightId);
     return flight;

    } catch (error) {
        console.log("error ocurred in flight repository");
        throw {error};
        
    }
}

async getAllFlight(filterData){

    try {
     const filter= this.#createFilter(filterData);      
     const flight=await Flight.findAll({where:filter});
     return flight;

    } catch (error) {
        console.log("error ocurred in flight repository");
        throw {error};
        
    }
}

async updateFlight(flightId,data){

    try {

             
     const [NoOfCityUpdated,flights]=await Flight.update(data,{where:{id:flightId}});
     return flights;
        
    } catch (error) {
        console.log("error ocurred in flight repository");
        throw {error};
        
    }
}

async destroyFlight(flightId){
    try {
        const noOfRowsDeleted=await Flight.destroy({where:{id:flightId}});
        return noOfRowsDeleted;
    } catch (error) {
        console.log("error ocurred in flight repository");
        throw {error};
        
    }
}

}

module.exports=FlightRepository;


