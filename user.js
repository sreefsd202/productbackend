
var mongoose = require('mongoose');
var uschema=mongoose.Schema({
    Uname:String,
    Email:String,
    Password:String,
    Phone:Number,
    userType:{type:String,enum:["admin","user"],default:"user"}
})
var userModel=mongoose.model("user",uschema)
module.exports=userModel