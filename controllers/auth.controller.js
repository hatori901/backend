const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const Admin = require('../models/Admin')
exports.signin = (req,res) => {
    Admin.findOne({
        username: req.body.username
    }).exec((err,user)=>{
        if(err){
            res.status(500).send({message: err})
            return;
        }
        if(!user){
            return res.status(404).send({message: "User Not Found"})
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password"
            })
        }
        var token = jwt.sign({id:user.id},config.secret,{
            expiresIn : 86400
        })

        res.status(200).send({
            id: user._id,
            username: user.username,
            accessToken: token
        })
    })
}