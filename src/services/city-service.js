const {CityRepository}=require('../repository/index');


class CityService{

    constructor(){
        this.cityRepository=new CityRepository();
    }


    async createCity(data){
        try {
            const city= await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("error occured in city services");
            throw {error};
        }
    }

     async getCity(cityId){
         try {
          const cities=await this.cityRepository.getCity(cityId);
          return cities;
        } catch (error) {
            console.log("error occured in city services");
            throw {error};
        }

     }

     async deleteCityById(cityId){
         try {
            await this.cityRepository.deleteCityById(cityId);
            return true;
        } catch (error) {
            console.log("error occured in city services");
            throw {error};
        }

     }

      async updateCity(cityId,data){ 
          try {
            const numberOfCitiesUpdated=await this.cityRepository.updateCity(cityId,data);
            return numberOfCitiesUpdated;
        } catch (error) {
            console.log("error occured in city services");
            throw {error};
        }

      }

       async deleteAllCities(){

         try {
            const noOfRowsDeleted=await this.cityRepository.deleteAllCities(cityId);
            return noOfRowsDeleted;
        } catch (error) {
            console.log("error occured in city services");
            throw {error};
        }
       }



}
module.exports=CityService;