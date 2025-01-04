const mongoose = require("mongoose")

const portfolioSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    cryptoName: { type: String, required: true },
    cryptoSymbol: { type: String, required: true },
    amountHeld: { type: Number, required: true },
    purchasePrice: { type: Number, required: true },
    purchaseDate: { type: Date, required: true },
    //currentPrice: { type: Number, default: 0 }, // Optional, if fetched and stored
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Portfolio", portfolioSchema)