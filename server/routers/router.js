const User = require('../models/userSchema')
const express = require('express')
// require('../db/conn')

const router = express.Router()

router.get('/home', (req, res) => {
  console.log('hello from router page')
  res.send('hello from router page')
})

module.exports = router
