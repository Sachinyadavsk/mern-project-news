import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    occupation: {
        type: String,
        default: ""
    },
    photoUrl: {
        type: String,
        default: ""
    },
    instragram: {
        type: String,
        default: ""
    },
    facebook: {
        type: String,
        default: ""
    },
    github: {
        type: String,
        default: ""
    },
    linkedin: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;