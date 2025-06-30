import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants-config.js';

import Certificate from "../models/certificate-model.js";
import Admin from '../models/admin-model.js';

export default {
    async getAll() {
        const data = await Certificate.find().sort({ createdAt: 1 });
        return data;
    },
    async getOne(id) {
        const data = await Certificate.findOne({ _id: id });
        return data;
    },
    async create(accessToken, data) {
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if (!admin) throw new Error("You don't have permission.");
        const creadtedData = await Certificate.create(data);

        return creadtedData;
    },
    async update(accessToken, id, updateData) {
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if (!admin) throw new Error("You don't have permission.");
        const updateCertificate = await Certificate.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        return this.getOne(updateCertificate);
    },
    async delete(accessToken, id) {
        const decoded = jwt.verify(accessToken, JWT_SECRET);
        const admin = await Admin.findById(decoded.id);

        if (!admin) throw new Error("You don't have permission.");

        return await Certificate.findByIdAndDelete(id);
    },
    async getAllLimit(limit) {
        return await Certificate.find()
            .sort({ createdAt: -1 })
            .limit(limit);
    }
}