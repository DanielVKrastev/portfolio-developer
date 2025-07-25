import { Router } from "express";
import authService from "../services/auth-service.js";
import { JWT_SECRET } from "../constants-config.js";
import jwt from 'jsonwebtoken';
import Admin from "../models/admin-model.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await authService.login(email, password);
        res.status(201).json(user);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
    }
});

authController.post('/logout', async (req, res) => {
    const token = req.header('X-Authorization');

    if (!token) {
        return res.status(200).json({ message: 'Logged out successfully' });
    }

    return res.status(200).json({ message: 'Logged out successfully' });
});

authController.get('/me', async (req, res) => {
    const token = req.header('X-Authorization');

    if (!token) {
        return res.status(401).json({ error: 'No token, access denied' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await Admin.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ id: user._id, accessToken: user.accessToken, username: user.username, role: user.role });
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
});

export default authController;