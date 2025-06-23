import About from "../models/about-model.js";

export default {
    async getAll(){
        const data = await About.find().sort( { createdAt: 1 } );
        return data;
    },
    async getOne(id){
        const data = await About.findOne({ _id: id});
        return data;
    },
    async create(data){
        const creadtedData = await About.create(data);
        return creadtedData;
    },
    async update(id, updateData){
        const updateAbout = await About.findByIdAndUpdate(id, updateData, {new: true, runValidators: true });
        
        return this.getOne(updateAbout);
    },
    async delete(id){
        return await About.findByIdAndDelete(id);
    },
    async getAllLimit(limit){
        return await About.find()
                .sort({ createdAt: -1 })  
                .limit(limit);           
    }
}