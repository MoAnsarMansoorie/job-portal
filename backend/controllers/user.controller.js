import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerController = async (req, res) => {
    try {
        const {fullName, email, phoneNumber, password, role} = req.body
        console.log(fullName, email, phoneNumber, password, role)

        if(!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(401).json({
                success: false,
                message: "All fields required"
            })
        }

        const user = await User.findOne({email})
        if(user) {
            return res.status(400).json({
                success: false,
                message: "User already exists."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({
            fullName,
            email, 
            phoneNumber,
            password: hashedPassword,
            role
        })

        return res.status(200).json({
            success: true,
            message: "User created successfully"
        })
        
    } catch (error) {
        console.log("registerController", error)
    }
}

export const loginController = async (req, res) => {
    try {
        const {email, password, role} = req.body

        if(!email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields required"
            })
        }

        let user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "invalid password or email"
            })
        }

        // check role is correct or not
        if(role !== user.role) {
            return res.status(400).json({
                success: false,
                message: "user is not exists with current role"
            })
        }

        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: "1d"})

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpOnly: true, sameSite: "strict"}).json({
            success: true,
            message: `Welcome back ${user.fullName}`,
            user
        })
        
    } catch (error) {
        console.log("loginController", error)
    }
}

export const logoutController = async (req, res) => {
    try {
        return res.status(200).cookie("token", "" ,  {maxAge: 0}).json({
            success: true,
            message: "User logout successfully"
        })
        
    } catch (error) {
        console.log("logoutController", error)
    }
}

export const updateProfileController = async (req, res) => {
    try {
        const {fullName, email, phoneNumber, bio, skills} = req.body
        const file = req.file
    
        // cloudinary

        let skillsArray;
        if(skills){
            skillsArray = skills.split(",");
        }
        const userId = req.id  //middleware authenticated

        let user = await User.findById(userId)

        if(!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        // updating data
        if(fullName) user.fullName = fullName
        if(email) user.email = email
        if(phoneNumber)  user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray

        // resumes comes later

        await user.save()

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user
        })

        
    } catch (error) {
        console.log("updateProfileController", updateProfileController)
    }
}