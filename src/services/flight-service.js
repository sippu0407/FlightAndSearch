const {AirplaneRepository,FlightRepository}=require('../repository/index');

class FlightService{

 constructor(){
    this.airplaneRepository=new AirplaneRepository();
    this.flightRepository=new FlightRepository();
 }
/**
 *  create-> data
 * {
 *   id->mysql
 *  airplaneId -> client
 *   flightNumber -> client
 *   arrivalTime -> client
 *   departureTime -> client
 *   arrivalAirportId ->client
 *   departureAirportId -> client
 *   totalSeat -> claculate airplane model
 *   boardingGate -> client
 *   price -> user
 *
 *} 
 */
 
async createFlight(data){
 
    try {

    const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
    const flight= await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
    return flight;
        
    } catch (error) {
        console.log("error occured in service layer");
        throw {error}
    }
  

 }

 async getAllFlight(filter){
 
    try {
    const flights= await this.flightRepository.getAllFlight(filter);
    return flights;
        
    } catch (error) {
        console.log("error occured in service layer");
        throw {error}
    }
  

 }






}

module.exports=FlightService;

