const express = require('express')
const router = express.Router()

const {
  getPortfolio,
  postPortfolio,
  updatePortfolio,
  deletePortfolio
} = require('../controllers/portfolio')

router.get('/', getPortfolio)
router.post('/', postPortfolio)
router.put('/:id', updatePortfolio)
router.delete('/:id', deletePortfolio)



module.exports = router
