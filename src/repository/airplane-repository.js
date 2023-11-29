const {Airplane}=require('../models/index');

class AirplaneRepository{


    async createAirplane(data){  // data->{modelNumber:"gvsg",capacity:26}
        try {
            const airplane=await Airplane.create(data);
            return airplane;
        } catch (error) {
            console.log("error occured in repository layer");
            throw {error};
            
        }
    }

    async destroyAirplane(airplaneId){
         
        try {

            const noOfRowsDeleted=await Airplane.destroy({where:{id:airplaneId}});
            return noOfRowsDeleted;
            
        } catch (error) {
            console.log("error occured in repository layer");
            throw {error};
            
        }
    }

    async getAirplane(airplaneId){
        
        try {
            const airplane=await Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.log("error occured in repository layer");
            throw {error};
            
        }
    }

    async updateAirplane(airplaneId,data){
         
        try {
            const [noOfRowsUpdated,airplanes]=await Airplane.update(data,{where:{id:airplaneId}});
            return noOfRowsUpdated;
        } catch (error) {
            console.log("error occured in repository layer");
            throw {error};
            
        }

    }

}

module.exports=AirplaneRepository;