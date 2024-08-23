import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./db/connectDb.js"

dotenv.config({})

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
const corsOptions = {
    origin: "http//localhost:5173",
    credentials: true
}
app.use(cors(corsOptions))

const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("<h1>Hello server</h1>")
})

app.listen(PORT, () => {
    connectDb()
    console.log(`Server is listening at port localhost:${PORT}`)
})