let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router(),
  userSchema = require('../models/User');

router.route('/refferal/:reff').get((req,res,next)=>{
  var query = userSchema.findOne({refferal: req.params.reff}).select({_id: 1,username:1})
  query.exec((err,data)=>{
    if(err){
      next(err)
    }else{
      res.json(data)
    }
  })
})

module.exports = router