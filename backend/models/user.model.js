import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneMu,ber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "recruiter"],
        required: true
    },
    profile: {
        bio: {
            type: String
        },
        skills: [{
            type: String
        }],
        resume: {
            type: String  // url to resume file
        },
        originalResumeName: {
            type: String
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company"
        },
        profilePicture: {
            type: String,
            default: ""
        }
    }
}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema)