import { Router } from "express";
import aboutService from "../services/about-service.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import mongoose from "mongoose";

const aboutController = Router();

aboutController.get('/', async (req, res) => {
    try{
        let data;
        if (req.query.limit) {
            const limit = parseInt(req.query.limit);
            data = await aboutService.getAllLimit(limit);
        } else{
            data = await aboutService.getAll();
        }

        res.status(200).json(data);
    }catch(error){
        res.status(400).json( { error } )
    }
});

aboutController.get('/:aboutId', async (req, res) => {
    const aboutId = req.params.aboutId;

    if (!mongoose.Types.ObjectId.isValid(aboutId)) {
        return res.status(400).json({ error: 'Invalid About ID' });
    }
    try {
        const data = await aboutService.getOne(aboutId);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error });
    }
});

aboutController.post('/', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try {
        const data = req.body;

        const createdData = await aboutService.create(accessToken, data);
        res.status(201).json(createdData);
    } catch(error) {
        const errMessage = getErrorMessage(error);
        return res.status(400).json({ error: errMessage });
    }
});

aboutController.patch('/:aboutId', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    const aboutId = req.params.aboutId;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(aboutId)) {
        return res.status(400).json({ error: 'Invalid About ID' });
    }

    try {
        const updatedData = await aboutService.update(accessToken, aboutId, updateData);
        if (!updatedData) {
            return res.status(404).json({ error: 'About not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
    }
});

aboutController.delete('/:aboutId', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }
    
    const aboutId = req.params.aboutId;
    try {
        await aboutService.delete(accessToken, aboutId);
        res.status(200).json({});
    } catch(error) {
        res.status(400).json( {error } );
    }
});

export default aboutController;