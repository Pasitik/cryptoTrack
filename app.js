require("dotenv").config()
//async errors
//require("express-async-errors")

const express = require ("express")
const app = express()

const connectDB = require("./db/connect")
//const authRouter = require("./routes/auth")
const routes = require('./index');

//const notFoundMiddleware = require("./middleware/not-found")
//const errorHandlerMiddleware = require("./middleware/error-handler")

//json middleware

app.use(express.json())

//routes

routes.forEach(({path, router})=>{
    app.use(path, router)
})



//app.use(notFoundMiddleware)
//app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

// app.listen(port, console.log(`Server is listening on port ${port}`) )

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`) )
    } catch(error){
        console.log(error)
    }
}

start()