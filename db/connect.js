const mongoose = require('mongoose')
// const fs = require('fs');

const options = {
   // tlsCAFile: 'global-bundle.pem', // Path to the Amazon RDS CA bundle file
    useNewUrlParser: true,
    useUnifiedTopology: true,
}  

const connectDB = (url) => {
  return mongoose.connect(url, options)
}

module.exports = connectDB
