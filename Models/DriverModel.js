const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const DriverSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    vehicle:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const driver = mongoose.model('Driver' , DriverSchema)

module.exports = driver