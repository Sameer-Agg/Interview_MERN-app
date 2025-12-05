const mongoose = require('mongoose');
const ENV = require('./env');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    profileImg:{type:String,default:''},
    clerkID:{type:String,required:true,unique:true},
},{timestamps:true})



const User = mongoose.model('User',userSchema);

module.exports = User;