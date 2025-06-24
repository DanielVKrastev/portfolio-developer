import { Router } from "express";
import projectService from "../services/project-service.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import mongoose from "mongoose";

const projectController = Router();

projectController.get('/', async (req, res) => {
    try{
        let data;
        if (req.query.limit) {
            const limit = parseInt(req.query.limit);
            data = await projectService.getAllLimit(limit);
        } else{
            data = await projectService.getAll();
        }

        res.status(200).json(data);
    }catch(error){
        res.status(400).json( { error } )
    }
});

projectController.get('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        return res.status(400).json({ error: 'Invalid Project ID' });
    }
    try {
        const data = await projectService.getOne(projectId);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error });
    }
});

projectController.post('/', async (req, res) => {
    try {
        const data = req.body;

        const createdData = await projectService.create(data);
        res.status(201).json(createdData);
    } catch(error) {
        const errMessage = getErrorMessage(error);
        return res.status(400).json({ error: errMessage });
    }
});

projectController.patch('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        return res.status(400).json({ error: 'Invalid Project ID' });
    }

    try {
        const updatedData = await projectService.update(projectId, updateData);
        if (!updatedData) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
    }
});

projectController.delete('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    try {
        await projectService.delete(projectId);
        res.status(200).json({});
    } catch(error) {
        res.status(400).json( {error } );
    }
});

export default projectController;