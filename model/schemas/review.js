const database = require('../database');
const mongoose = require('mongoose');

var reviewSchema = database.Schema({
        r_id:{
                type:String,
                require:true,
                trim:true
        },
        r_msg:{
                type:String,
                require:true,
                trim:true
        },
        r_date:{
                type:Date,
                require:true,
                trim:true,
                default:Date.now
        },
        p_id:{
                type:String,
                require:true,
                trim:true
        }
});

module.exports = database.model('reviewDatas',reviewSchema);