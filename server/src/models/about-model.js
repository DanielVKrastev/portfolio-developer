import { Schema, model } from "mongoose";

const aboutSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    headline: {
        type: String,
        required: [true, 'Headline is required'],
    },
    headlineDescription: {
        type: String,
        require: [true, 'The Headline Descriptio is required'],
    },
    mainDescription: {
        type: String,
        require: [true, 'The Main Description is required'],
    },
    age: {
        type: Number,
        min: [1, 'The minimum age is 1'],
        max: [100, 'The max age is 100'],
        require: [true, 'Age is required'],
    },
    location: {
        type: String,
        require: [true, 'Location is required'],
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
    },
    experience: {
        type: Number,
        require: [true, 'Experience (years) is required'],
    },
    imageUrl: {
        type: String,
        require: [true, 'Image is required'],
    },
    imageUrl2: {
        type: String,
    },
}, {
    timestamps: true
}
);

const About = model('About', aboutSchema);

export default About;