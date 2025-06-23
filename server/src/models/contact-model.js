import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Name is required'],
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
    },
    subject: {
        type: String,
        require: [true, 'Subject is required'],
    },
    message: {
        type: String,
        require: [true, 'Message is required'],
    }
}, {
    timestamps: true
}
);

const Contact = model('Contact', contactSchema);

export default Contact;