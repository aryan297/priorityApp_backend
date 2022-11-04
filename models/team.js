const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  team_name:String,
  Date:Date
});

 mongoose.model("Team", TeamSchema);