import { Schema, model } from "mongoose";

const techStackSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    level: {
        type: Number,
        max: [100, 'The max level is 100'],
        min: [0, 'The minimum level is 0'],
        require: [true, 'Tech Level is required'],
    },
    bgColor: {
        type: String,
    },
    imageUrl: {
        type: String
    }
}, {
    timestamps: true
}
);

const TechStack = model('TechStack', techStackSchema);

export default TechStack;