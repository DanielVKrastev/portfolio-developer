import { Schema, model } from "mongoose";

const certificateSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    issuedBy: {
        type: String,
        require: [true, 'The Issued By field is required'],
    },
    certificateUrl: {
        type: String,
        require: [true, 'The Certificate URL is required'],
    }
}, {
    timestamps: true
}
);

const Certificate = model('Certificate', certificateSchema);

export default Certificate;