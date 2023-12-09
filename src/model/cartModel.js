const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    productID:{type:mongoose.Schema.Types.ObjectId,required:true},
    quantity:{type:Number, require},
})

const cartModel = mongoose.model('carts',dataSchema);
module.exports=cartModel;