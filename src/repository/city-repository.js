const {City}=require('../models/index');

class CityRepository{
    
    async createCity({name}){
      
        try {
            const city=await City.create({name});  // City.create({name:"dwarka-delhi"}) -> it return js-object
            return city;
        } catch (error) {
            console.log("error occured at repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("error occured at repository layer");
        }
    }
    async deleteCityById(cityId){
          try {
            
            const response=await City.destroy({where:{id:cityId}});
            return response;
        } catch (error) {
            console.log("error occured at repository layer");
            throw {error}
        }
    }
    async updateCity({cityId,data}){
             try {
              
            const [NoOfCityDeleted,cities]=await City.update(data,{where:{id:cityId}}); // update function takes 2-js-object as argv.
            return cities;
        } catch (error) {
            console.log("error occured at repository layer");
            throw {error};
        }
    }
    async deleteAllCities(){
           try {
            const rowsDeleted=await City.destroy({where:{}});
            return rowsDeleted;
        } catch (error) {
              console.log("error occured at repository layer");
            throw {error};
        }
    }
}

module.exports=CityRepository;