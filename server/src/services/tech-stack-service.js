import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants-config.js';

import TechStack from "../models/tech-stack-model.js";
import Admin from '../models/admin-model.js';

export default {
    async getAll() {
        const data = await TechStack.find().sort({ createdAt: 1 });
        return data;
    },
    async getOne(id) {
        const data = await TechStack.findOne({ _id: id });
        return data;
    },
    async create(accessToken, data) {
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if (!admin) throw new Error("You don't have permission.");

        const creadtedData = await TechStack.create(data);
        return creadtedData;
    },
    async update(accessToken, id, updateData) {
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if (!admin) throw new Error("You don't have permission.");

        const updateTechStack = await TechStack.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        return this.getOne(updateTechStack);
    },
    async delete(accessToken, id) {
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if (!admin) throw new Error("You don't have permission.");
        return await TechStack.findByIdAndDelete(id);
    },
    async getAllLimit(limit) {
        return await TechStack.find()
            .sort({ createdAt: -1 })
            .limit(limit);
    }
}