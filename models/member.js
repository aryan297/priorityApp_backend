const mongoose = require("mongoose");


// Define a schema


const MemberSchema = new mongoose.Schema({
  member_name:String,
  priority:{ type: mongoose.Schema.Types.ObjectId, ref: 'Priority' }
});


module.exports=mongoose.model('Member',MemberSchema)