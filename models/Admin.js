const mongoose = require('mongoose')
const Admin = mongoose.model(
    "Admin",
    new mongoose.Schema({
        username: String,
        password: String
    },
    {
        collection: 'Admin'
    })
)
module.exports = Admin