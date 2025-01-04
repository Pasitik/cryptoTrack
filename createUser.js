const User = require("./models/auth")
const Portfolio = require("./models/portfolio")
const mongoose = require('mongoose')
const portfolio = require("./models/portfolio")
require("dotenv").config()

// const fs = require('fs');

const options = {
   // tlsCAFile: 'global-bundle.pem', // Path to the Amazon RDS CA bundle file
    useNewUrlParser: true,
    useUnifiedTopology: true,
}  

mongoose.connect(process.env.MONGO_URI, options)


const newUser = new User({
    username: "cryptoFan",
    email: "crypto@example.com",
    password: "securepassword123"
})

newUser.save()
    .then(user => console.log("User saved:", user))
    .catch(err => console.error(err));

const createPortfolio =()=>{
    const newPortfolio = new Portfolio({
        userId: newUser._id,
        cryptoName: "Bitcoin",
        cryptoSymbol: "BTC",
        amountHeld: 50,
        purchasePrice: 45000,
        purchaseDate: "2018-01-01",
    })

    newPortfolio.save()
        .then(console.log("User updated:", newUser))
        .catch(err =>{console.log(err)})

    newUser["portfolio"].push(newPortfolio._id)
}

createPortfolio()