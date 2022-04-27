let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

let userSchema = require('../models/User');

router.route('/').get((req, res) => {
    userSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

module.exports = router;