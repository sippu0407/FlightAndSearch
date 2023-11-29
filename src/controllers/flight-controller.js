const {FlightService}=require('../services/index');

const flightService=new FlightService();

const create=async(req,res)=>{

    try {
     
        const flight=await flightService.createFlight(req.body);
        res.status(200).json({
        data:flight,
        success:true,                               
        message:"successfully created a flight",
        err:{}
        })
              
        
    } catch (error) {
        return res.status(500).json({           // we give response as json
        data:{},     // data is empty object
        success:false,    // failed                           
        message:"not able to create teh flight", //
        err:error   // returning whole error object which is not recommended
    })
    }
}

module.exports={
    create
}