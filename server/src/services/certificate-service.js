import Certificate from "../models/certificate-model.js";

export default {
    async getAll(){
        const data = await Certificate.find().sort( { createdAt: 1 } );
        return data;
    },
    async getOne(id){
        const data = await Certificate.findOne({ _id: id});
        return data;
    },
    async create(data){
        const creadtedData = await Certificate.create(data);
        return creadtedData;
    },
    async update(id, updateData){
        const updateCertificate = await Certificate.findByIdAndUpdate(id, updateData, {new: true, runValidators: true });
        
        return this.getOne(updateCertificate);
    },
    async delete(id){
        return await Certificate.findByIdAndDelete(id);
    },
    async getAllLimit(limit){
        return await Certificate.find()
                .sort({ createdAt: -1 })  
                .limit(limit);           
    }
}