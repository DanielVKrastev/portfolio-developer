import bcrypt from 'bcrypt';

import Admin from '../models/admin-model.js';
import { generateToken } from '../utils/auth-unils.js';

export default {
    async login(email, password) {
        const user = await Admin.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const accessToken = generateToken(user);

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid email or password');
        }

        return { _id: user._id, accessToken: accessToken, email: user.email, username: user.username, role: user.role };
    },
    async getAll() {
        const users = await Admin.find().sort({ _id: -1 });
        return users;
    },
    async getOne(userId) {
        const user = await Admin.findOne({ _id: userId });
        return user;
    },
    async delete(userId) {
        return await Admin.findByIdAndDelete(userId);
    },
    async update(userId, updateData) {
        const user = await this.getOne(userId);

        if (updateData.email !== user.email) {
            const userEmail = await Admin.find({ email: updateData.email });

            if (userEmail.length > 0) {
                throw new Error('This email is already taken');
            }
        }

        let newRole = user.role;
        if (updateData.role === "Admin") {
            newRole = "Admin";
        }

        const accessToken = generateToken({ _id: userId, ...updateData, role: newRole });
        const updatedUser = await Admin.findByIdAndUpdate(userId, updateData, { new: true, runValidators: true });
        const result = { ...updatedUser._doc, accessToken};

        return result;
    },
}
