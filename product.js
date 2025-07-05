const mongoose = require('mongoose');
var schema=mongoose.Schema({
    Pname:String,
    Price:Number,
    Desc:String,
    Image:String
})
var ProductModel=mongoose.model("product",schema)
module.exports=ProductModel