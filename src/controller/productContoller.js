const productModel = require('../model/productModel')


exports.createProduct=async (req,res)=>{
    try {
        let postBody = req.body;
        let data = await productModel.create(postBody);
        res.status(200).json({status:"success",data:data})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}