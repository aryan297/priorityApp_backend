const mongoose = require("mongoose");

// Define a schema


const PrioritySchema = new mongoose.Schema({
  priority:Number
});


module.exports=mongoose.model('Priority',PrioritySchema)