let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
  const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')
const controller = require('../controllers/auth.controller')
let userSchema = require('../models/User');
let adminSchema = require('../models/Admin');
const User = require('../models/User');
router.use((req,res,next)=>{
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      req.userId = decoded.id;
      next();
  });
})
router.route('/').get((req, res) => {
    userSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})
router.route('/verified').get((req,res,next)=>{
  userSchema.countDocuments({verified: true},(error,count)=>{
    if (error) {
      return next(error)
    } else {
      res.json(count)
    }
  })
})
router.route('/details/:username').get((req, res,next) => {
  userSchema.findOne({username: req.params.username},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



module.exports = router;