const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const express = require('express')
const app = express()
require('./db/conn')
app.use(express.json())

const User = require('./models/userSchema')

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('hello from home page')
})

app.use(require('./routers/router'))

app.listen(port, () => {
  console.log(`connection is set at ${port}`)
})
