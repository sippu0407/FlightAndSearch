const {CityService}=require('../services/index');

const cityService=new CityService(); // creating a global cityService object

// POST -> /city  -->req.body= {kae:value}
const create=async (req,res)=>{
  try {
    const city=await cityService.createCity(req.body); // req.body= {name:"varanasi"}
    return res.status(200).json({           // we give response as json
        data:city,
        success:true,                               
        message:"successfully created city",
        err:{}
    })
  } catch (error) {
    console.log(error);
     return res.status(500).json({           // we give response as json
        data:{},     // data is empty object
        success:false,    // failed                           
        message:"internal server error", //
        err:error   // returning whole error object which is not recommended
    })
  }
}

// DELETE -> city/:id -->req.params.id
const destroy=async (req,res)=>{
    try {
      const response=await cityService.deleteCityById(req.params.id); // req.body= {name:"varanasi"}
      return res.status(200).json({           // we give response as json
        data:response,
        success:true,                               
        message:"successfully deleted city",
        err:{}
    })
  } catch (error) {
     console.log(error);
     return res.status(500).json({           // we give response as json
        data:{},     // data is empty object
        success:false,    // failed                           
        message:"not able to delete the data", //
        err:error   // returning whole error object which is not recommended
    })
  }
}

//GET -> /city + query -->req.query if there is any filteration
const getAll=async (req,res)=>{
    try {
        const cities=await cityService.getAllCity(req.query); // req.query=? para
        return res.status(200).json({           // we give response as json
        data:cities,
        success:true,                               
        message:"successfully fetched city",
        err:{}
    })
    
  } catch (error) {
     console.log(error);
     return res.status(500).json({           // we give response as json
        data:{},     // data is empty object
        success:false,    // failed                           
        message:"not able to fetch the data", //
        err:error   // returning whole error object which is not recommended
    })
  }

}

//GET -> /city/:id  -->req.params.id
const get=async (req,res)=>{
    try {
        const cities=await cityService.getCity(req.params.id); // req.body= {name:"varanasi"}
        return res.status(200).json({           // we give response as json
        data:cities,
        success:true,                               
        message:"successfully fetched city",
        err:{}
    })
    
  } catch (error) {
     console.log(error);
     return res.status(500).json({           // we give response as json
        data:{},     // data is empty object
        success:false,    // failed                           
        message:"not able to fetch the data", //
        err:error   // returning whole error object which is not recommended
    })
  }
}

//PATCH : /city/:id + body --> req.params.id + req.body
const update=async (req,res)=>{
    try {
         const NoOfCityUpdated=await cityService.updateCity(req.params.id,req.body); // req.body= {name:"varanasi"}
        
         if (NoOfCityUpdated=== 0) {
            // No rows were updated, meaning there is no row with id: 49
            return res.json({
                success: false,
                message: "City not found",
                err: {}
            });
        } else {
        
         return res.status(200).json({           // we give response as json
        data:cities,
        success:true,                               
        message:"successfully updated city",
        err:{}
      })
   }
  } catch (error) {
    console.log(error);
     return res.status(500).json({           // we give response as json
        data:{},     // data is empty object
        success:false,    // failed                           
        message:"not able to update the data", //
        err:error   // returning whole error object which is not recommended
    })
  }
}

module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}