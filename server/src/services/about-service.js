import jwt from 'jsonwebtoken';

import About from "../models/about-model.js";
import { JWT_SECRET } from '../constants-config.js';
import Admin from '../models/admin-model.js';

export default {
    async getAll(){
        const data = await About.find().sort( { createdAt: 1 } );
        return data;
    },
    async getOne(id){
        const data = await About.findOne({ _id: id});
        return data;
    },
    async create(accessToken, data){
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if(!admin) throw new Error("You don't have permission.");

        const creadtedData = await About.create(data);
        return creadtedData;
    },
    async update(accessToken, id, updateData){
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if(!admin) throw new Error("You don't have permission.");

        const updateAbout = await About.findByIdAndUpdate(id, updateData, {new: true, runValidators: true });
        
        return this.getOne(updateAbout);
    },
    async delete(accessToken, id){
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if(!admin) throw new Error("You don't have permission.");
        
        return await About.findByIdAndDelete(id);
    },
    async getAllLimit(limit){
        return await About.find()
                .sort({ createdAt: -1 })  
                .limit(limit);           
    }
}