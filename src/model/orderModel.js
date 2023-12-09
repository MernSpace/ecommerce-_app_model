const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    productID:{type:mongoose.Schema.Types.ObjectId,required:true},
    totalAmount:{type:Number, require},
    shippingAdd:{type:String, require},
    status:{type:String,default:"Pending"}
})

const orderModel = mongoose.model('orders',dataSchema);
module.exports=orderModel;