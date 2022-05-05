const controller = require('../controllers/auth.controller')
let express = require('express');
const router = express.Router();

router.route('/login').post(controller.signin)

module.exports = router