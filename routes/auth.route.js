const controller = require('../controllers/auth.controller')
let express = require('express'),
    router = express.Router();
module.exports = function(app){
    router.route('/login').post(controller.signin)
}