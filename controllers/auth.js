const auth = require("../models/auth")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



const login = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await auth.findOne({email})
        const validUser = await bcrypt.compare(password, user.password)
        if(!validUser) return res.status(401).json({ message: "Invalid credentials" })
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: "1h" })

        res.status(200).json({
            message: "Login successful",
            token,
          })
    }catch(err){
        console.log(err)
    }
}

const register = async (req, res) => {
    const {username, email, password} = req.body

    try{
        const user = await auth.findOne({username})
        if(user) return res.status(400).json({message: "Username exists"})
        const mail = await auth.findOne({email})
        if(mail) return res.status(400).json({message: "Username exists"})
        
        hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await auth.create({
            username,
            email,
            password: hashedPassword
        })
        
        res.status(200).json({message: `user sucessfully created`, user: { id: newUser._id, username: newUser.username, email: newUser.email }})

    }catch(error){
        console.log(error)
    }
}

module.exports = {login, register}
