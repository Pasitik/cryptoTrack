const User = require('../models/auth')
const Portfolio = require('../models/Portfolio')


const getPortfolio = async (req, res) => {
    const {id} = req.params

    try{
        const user = await User.findById(id).populate("portfolio")
        if (!user){
            return res.status(404).json({ message: 'User not found' })
        }
        console.log(user)
        res.status(200).json({ portfolio: user.portfolio })
    }catch(error){
        console.error(error)
        return res.status(404).json({message: 'Server Error'})
    }
}

const postPortfolio = async (req, res) => {
    const { id } = req.params
    const { userId,
            cryptoName, 
            cryptoSymbol, 
            amountHeld, 
            purchasePrice, 
            purchaseDate} = req.body

    try{
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newPorfolio = new Portfolio({
            userId: id,
            cryptoName, 
            cryptoSymbol, 
            amountHeld, 
            purchasePrice, 
            purchaseDate
        })

        const savedPortfolio = await newPorfolio.save()

        user.portfolio.push(savedPortfolio._id)
        await user.save()
        return res.status(201).json({ message: 'Portfolio created', portfolio: savedPortfolio })

    }catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Server error', error: error.message })
    }
}

const updatePortfolio = (req, res) => {
    res.json({"registered": true})
}

const deletePortfolio = (req, res) => {
    res.json({"registered": true})
}


module.exports = {
    getPortfolio,
    postPortfolio,
    updatePortfolio,
    deletePortfolio
}
