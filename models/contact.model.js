import mongoose from "mongoose";
const { Schema } = mongoose;

const contactUsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export default mongoose.model("ContactUs", contactUsSchema)