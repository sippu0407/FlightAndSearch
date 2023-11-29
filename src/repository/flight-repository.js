const {Flight}=require('../models/index');

class FlightRepository{

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


