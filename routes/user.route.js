let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
const controller = require('../controllers/auth.controller')
let userSchema = require('../models/User');
let adminSchema = require('../models/Admin')

router.route('/').get((req, res) => {
    userSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})
router.route('/login').post(controller.signin)
router.route('/:username').get((req, res,next) => {
  userSchema.findOne({username: req.params.username},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router;