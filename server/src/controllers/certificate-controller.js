import { Router } from "express";
import certificateService from "../services/certificate-service.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import mongoose from "mongoose";

const certificateController = Router();

certificateController.get('/', async (req, res) => {
    try{
        let data;
        if (req.query.limit) {
            const limit = parseInt(req.query.limit);
            data = await certificateService.getAllLimit(limit);
        } else{
            data = await certificateService.getAll();
        }

        res.status(200).json(data);
    }catch(error){
        res.status(400).json( { error } )
    }
});

certificateController.get('/:certificateId', async (req, res) => {
    const certificateId = req.params.certificateId;

    if (!mongoose.Types.ObjectId.isValid(certificateId)) {
        return res.status(400).json({ error: 'Invalid Certificate ID' });
    }
    try {
        const data = await certificateService.getOne(certificateId);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error });
    }
});

certificateController.post('/', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    try {
        const data = req.body;

        const createdData = await certificateService.create(accessToken, data);
        res.status(201).json(createdData);
    } catch(error) {
        const errMessage = getErrorMessage(error);
        return res.status(400).json({ error: errMessage });
    }
});

certificateController.patch('/:certificateId', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    const certificateId = req.params.certificateId;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(certificateId)) {
        return res.status(400).json({ error: 'Invalid Certificate ID' });
    }

    try {
        const updatedData = await certificateService.update(accessToken, certificateId, updateData);
        if (!updatedData) {
            return res.status(404).json({ error: 'Certificate not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
    }
});

certificateController.delete('/:certificateId', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    const certificateId = req.params.certificateId;
    try {
        await certificateService.delete(accessToken, certificateId);
        res.status(200).json({});
    } catch(error) {
        res.status(400).json( {error } );
    }
});

export default certificateController;