const express=require('express');
const cityController=require('../../controllers/city-controller');

const router=express.Router();

// /api/v1/city  or /api/v1/city/:id uri handle karna hai to correct controller function
router.post('/city',cityController.create);
router.get('/city',cityController.getAll);
router.get('/city/:id',cityController.get);
router.patch('/city/:id',cityController.update);
router.delete('/city/:id',cityController.destroy);

module.exports=router;