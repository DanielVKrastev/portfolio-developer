import Project from "../models/project-model.js";

export default {
    async getAll(){
        const data = await Project.find().sort( { createdAt: 1 } );
        return data;
    },
    async getOne(id){
        const data = await Project.findOne({ _id: id});
        return data;
    },
    async create(data){
        const creadtedData = await Project.create(data);
        return creadtedData;
    },
    async update(id, updateData){
        const updateProject = await Project.findByIdAndUpdate(id, updateData, {new: true, runValidators: true });
        
        return this.getOne(updateProject);
    },
    async delete(id){
        return await Project.findByIdAndDelete(id);
    },
    async getAllLimit(limit){
        return await Project.find()
                .sort({ createdAt: -1 })  
                .limit(limit);           
    }
}