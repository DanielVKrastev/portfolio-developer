import { Schema, model } from "mongoose";

const projectSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    description: {
        type: String,
        require: [true, 'Description is required'],
    },
    techStack: {
        type: String,
        require: [true, 'The Tech Stack is required'],
    },
    imageUrl: {
        type: String,
        require: [true, 'ImageURL is required'],
    },
    projectUrl: {
        type: String,
    }
}, {
    timestamps: true
}
);

const Project = model('Project', projectSchema);

export default Project;