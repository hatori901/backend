const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
    username: String
},
{
    collection: '_User'
})
module.exports = mongoose.model('User', userSchema)