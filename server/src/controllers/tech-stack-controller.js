import { Router } from "express";
import techStackService from "../services/tech-stack-service.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import mongoose from "mongoose";

const techStack = Router();

techStack.get('/', async (req, res) => {
    try{
        let data;
        if (req.query.limit) {
            const limit = parseInt(req.query.limit);
            data = await techStackService.getAllLimit(limit);
        } else{
            data = await techStackService.getAll();
        }

        res.status(200).json(data);
    }catch(error){
        res.status(400).json( { error } )
    }
});

techStack.get('/:techStackId', async (req, res) => {
    const techStackId = req.params.techStackId;

    if (!mongoose.Types.ObjectId.isValid(techStackId)) {
        return res.status(400).json({ error: 'Invalid TechStack ID' });
    }
    try {
        const data = await techStackService.getOne(techStackId);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error });
    }
});

techStack.post('/', async (req, res) => {
    try {
        const data = req.body;

        const createdData = await techStackService.create(data);
        res.status(201).json(createdData);
    } catch(error) {
        const errMessage = getErrorMessage(error);
        return res.status(400).json({ error: errMessage });
    }
});

techStack.patch('/:techStackId', async (req, res) => {
    const techStackId = req.params.techStackId;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(techStackId)) {
        return res.status(400).json({ error: 'Invalid techStack ID' });
    }

    try {
        const updatedData = await techStackService.update(techStackId, updateData);
        if (!updatedData) {
            return res.status(404).json({ error: 'TechStack not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
    }
});

techStack.delete('/:techStackId', async (req, res) => {
    const techStackId = req.params.techStackId;
    try {
        await techStackService.delete(techStackId);
        res.status(200).json({});
    } catch(error) {
        res.status(400).json( {error } );
    }
});

export default techStack;