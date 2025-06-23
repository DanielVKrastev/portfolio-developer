import TechStack from "../models/tech-stack-model.js";

export default {
    async getAll(){
        const data = await TechStack.find().sort( { createdAt: 1 } );
        return data;
    },
    async getOne(id){
        const data = await TechStack.findOne({ _id: id});
        return data;
    },
    async create(data){
        const creadtedData = await TechStack.create(data);
        return creadtedData;
    },
    async update(id, updateData){
        const updateTechStack = await TechStack.findByIdAndUpdate(id, updateData, {new: true, runValidators: true });
        
        return this.getOne(updateTechStack);
    },
    async delete(id){
        return await TechStack.findByIdAndDelete(id);
    },
    async getAllLimit(limit){
        return await TechStack.find()
                .sort({ createdAt: -1 })  
                .limit(limit);           
    }
}