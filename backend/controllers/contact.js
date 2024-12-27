import { Contact } from "../models/contact.js";

export const addContact = async (req,res) =>{
    try{
        const {name , email} = req.body;
        if(!name || !email){
            return res.status(400).json({
                message:"Name and Email are required",
                success:false
            })
        }
        await Contact.create({name,email});
        return res.status(201).json({
            message:"Contact added successfully",
            success:true
        })
    }catch(error){
        console.log(error);
    }
}