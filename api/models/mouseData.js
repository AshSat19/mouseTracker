// Description: Mongoose data model for Mouse Tracking Data
// Author: AshwinSathian

const mongoose = require("mongoose");

const mouseDataSchema = new mongoose.Schema({
     avenger: {
        type: String, 
     },    
     clicks: {
        type: Number, 
     },
     hovers: {
        type: Number, 
     }
});

module.exports = mongoose.model("MouseData", mouseDataSchema);