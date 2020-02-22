
const database = require('../db');


// Registration Schema For User

const registerSchema= database.Schema({
    first_name : {
        type:String,
        required:true,
        trim:true,
        min:6,
        max:255 
    },
    last_name : {
        type:String,
        required:true, 
        trim:true,
        max:255,
        min:9
        
    },
    email : {
        type:String,
        required:true, 
        trim:true,
        max:255,
        min:9
    },
    password: {
        type:String,
        required:true,
        trim:true,
        max:255,
        min:9
        }
});

// Validations of User
 
registerSchema.path('first_name').required(true,'Invalid first_name.');
registerSchema.path('last_name').required(true,'Invalid last_name.');
registerSchema.path('email').required(true,'Wrong Email.');
registerSchema.path('password').required(true,'Wrong Password.');

//Schema of User
module.exports = database.model('Register',registerSchema);
