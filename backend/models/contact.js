import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
},{timestamps:true});

export const Contact = mongoose.model('Contact',ContactSchema)