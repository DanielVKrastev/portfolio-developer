import { Router } from "express";
import contactService from "../services/contact-service.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import mongoose from "mongoose";

const contactController = Router();

contactController.get('/', async (req, res) => {
    try{
        let data;
        if (req.query.limit) {
            const limit = parseInt(req.query.limit);
            data = await contactService.getAllLimit(limit);
        } else{
            data = await contactService.getAll();
        }

        res.status(200).json(data);
    }catch(error){
        res.status(400).json( { error } )
    }
});

contactController.get('/:contactId', async (req, res) => {
    const contactId = req.params.contactId;

    if (!mongoose.Types.ObjectId.isValid(contactId)) {
        return res.status(400).json({ error: 'Invalid Contact Message ID' });
    }
    try {
        const data = await contactService.getOne(contactId);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error });
    }
});

contactController.post('/', async (req, res) => {
    try {
        const data = req.body;

        const createdData = await contactService.create(data);
        res.status(201).json(createdData);
    } catch(error) {
        const errMessage = getErrorMessage(error);
        return res.status(400).json({ error: errMessage });
    }
});

contactController.patch('/:contactId', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    const contactId = req.params.contactId;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(contactId)) {
        return res.status(400).json({ error: 'Invalid Contact Message ID' });
    }

    try {
        const updatedData = await contactService.update(accessToken, contactId, updateData);
        if (!updatedData) {
            return res.status(404).json({ error: 'Contact Message not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.status(400).json({ error: errorMessage });
    }
});

contactController.delete('/:contactId', async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken) {
        return res.status(403).json({ error: 'No token provided' });
    }

    const contactId = req.params.contactId;
    try {
        await contactService.delete(accessToken, contactId);
        res.status(200).json({});
    } catch(error) {
        res.status(400).json( {error } );
    }
});

export default contactController;