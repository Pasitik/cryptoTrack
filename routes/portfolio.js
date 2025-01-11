const express = require('express')
const verify = require("../middleware/verify")
const router = express.Router()

const {
  getPortfolio,
  postPortfolio,
  updatePortfolio,
  deletePortfolio
} = require('../controllers/portfolio')

router.get('/:id', verify, getPortfolio)
router.post('/:id', verify, postPortfolio)
router.put('/:id', updatePortfolio)
router.delete('/:id', deletePortfolio)



module.exports = router
