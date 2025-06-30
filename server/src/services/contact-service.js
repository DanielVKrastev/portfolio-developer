import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants-config.js';

import Contact from "../models/contact-model.js";
import Admin from "../models/admin-model.js";

export default {
    async getAll(){
        const data = await Contact.find().sort( { createdAt: 1 } );
        return data;
    },
    async getOne(id){
        const data = await Contact.findOne({ _id: id});
        return data;
    },
    async create(data){

        const creadtedData = await Contact.create(data);
        return creadtedData;
    },
    async update(accessToken, id, updateData){
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if(!admin) throw new Error("You don't have permission.");

        const updateContact = await Contact.findByIdAndUpdate(id, updateData, {new: true, runValidators: true });
        
        return this.getOne(updateContact);
    },
    async delete(accessToken, id){
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if(!admin) throw new Error("You don't have permission.");

        return await Contact.findByIdAndDelete(id);
    },
    async getAllLimit(limit){
        return await Contact.find()
                .sort({ createdAt: -1 })  
                .limit(limit);           
    }
}