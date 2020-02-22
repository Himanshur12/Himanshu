const database  = require('../database'); 
const mongoose = require('mongoose');

var productSchema = database.Schema({
  p_id: {
    type:String,
    require:true,
    trim:true
  },
  p_name: {
    type:String,
    require:true,
    trim:true
  },
  p_desc: {
    type:String,
    require:true,
    trim:true
  },
  p_image:{
    type:String,
    require:true
  },
  obj_id: {
    type:String,
    require:true,
    trim:true
  },
  reviews:{
     type: Array
    }
});

//Schema For Model
module.exports = database.model('productData', productSchema);