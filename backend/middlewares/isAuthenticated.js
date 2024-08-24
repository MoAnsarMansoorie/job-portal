import jwt from "jsonwebtoken"

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if(!token) {
            return res.status(400).json({
                success: false,
                message: "User not authenticated"
            })
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY)
        if(!decode) {
            return res.status(400).json({
                success: false,
                message: "Invalid token"
            })
        }

        req.id = decode.userId
        next()
        
    } catch (error) {
        console.log("Authentication error", error)
    }
}

export default isAuthenticated