const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    "name":{type:String},
    "pno":{type:Number},
    "dor":{type:String},
    "tor":{type:String},
    "cui":{type:String},
    "gue":{type:Number}
},{
    collection:"customerdb"
})


module.exports = mongoose.model("customerSchema",customerSchema);