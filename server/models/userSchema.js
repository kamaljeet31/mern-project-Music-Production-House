const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// const { TokenExpiredError } = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
})

userSchema.pre('save', async function (next) {
  console.log('hi from inside')
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12)
    this.cpassword = await bcrypt.hash(this.cpassword, 12)
  }
  next()
})

// we are generating Token
userSchema.methods.generateAuthToken = async function () {
  try {
    token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({ token: token })
    await this.save()
    return token
  } catch (error) {
    console.log(error)
  }
}

// storing messages in database
userSchema.methods.addMessage = async function (name, email, phone, message) {
  try {
    this.messages = this.messages.concat({ name, email, phone, message })
    await this.save()
    return messages
  } catch (error) {
    console.log(error)
  }
}

// creating new model or collection

const User = mongoose.model('User', userSchema)

module.exports = User
