import mongoose from "mongoose";

// By default Mongoose removes empty objects from the document, setting minimize: false
// tells Mongoose to keep the empty objects in the document
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
}, { minimize: false })


const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;