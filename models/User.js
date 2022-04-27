const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
  accounts: {
    type: Array
  },
}, {
    collection: '_User'
  })
module.exports = mongoose.model('User', userSchema)