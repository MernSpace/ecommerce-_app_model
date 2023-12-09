const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    name:{type:String,require},
    description:{type:String},
    price:{type:Number},
    stock:{type:Boolean,require},
    category:{type:String,require},
    imageURL:{type:String,optional:true}
})


const productModel = mongoose.model('products',dataSchema);
module.exports=productModel;