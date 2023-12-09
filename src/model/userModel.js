const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    firstName:{type:String, require},
    lastName:{type:String,require},
    email:{type:String, require, unique:true},
    password:{type:String,require},
    phoneNumber:{type:String,optional:true},
    address:{type:String,optional: true}
})


const userModel = mongoose.model('users',dataSchema);
module.exports=userModel;