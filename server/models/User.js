const mongoose = require('mongoose')
const { Schema } = mongoose

const UserScheme = new Schema({
  name: String
})

mongoose.model('User', UserScheme)
