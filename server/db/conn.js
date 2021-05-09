// const mongoose = require('mongoose')

// const DB =
//   // 'mongodb+srv://kamaljeet:ojdsCHNLCjUo3zw9@cluster0.2wdme.mongodb.net/first-mern-project?retryWrites=true&w=majority'
//   process.env.DATABASE
// mongoose
//   .connect(DB, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('connection successful')
//   })
//   .catch((e) => {
//     console.log('no connection')
//   })

const mongoose = require('mongoose')

const DB = process.env.DATABASE
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful`)
  })
  .catch((err) => console.log(`no connection`))
