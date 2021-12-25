import mongoose from "mongoose";
import userModel from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const secret = "$x^2X45uLRmpD6Z!F&Gb"

export const signUp = (req, res, next) => {

    userModel.find({ username: req.body.username })
        .exec()
        .then(user => {
            console.log(user)
            if (user.length >= 1)
                    return res.status(400).json({
                        Error: "user exists"
                    })
                
                
            else {
                bcrypt.hash(req.body.password, 12, (err, hash) => {

                    if (err) {
                        return res.status(500).json({ Error: err })
                    }
                    else {
                        const user = new userModel({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.username,
                            password: hash
                        })
                        user
                            .save()
                            .then(result => {
                                console.log(result)
                                res.status(201).json({
                                    mes: "user created"
                                })
                                
                            })
                            .catch(error => {
                                console.log(error)
                                res.status(500).json({ Error: error })
                            });
                    }
                })
            }
        })

}

export const logIn = (req, res, next) => {

    userModel.findOne({username: req.body.username})
    .then(user => {
        console.log(user)
        if (!user)
            return res.status(401).json({
                message:"auth failed"
            })
        else{
            bcrypt.compare(req.body.password,user.password , (err,result) => {

                if (err){
                    return res.status(401).json({
                        message:"auth failed"
                    })
                }
                if (result)
                {
                    const token  = jwt.sign({_id: user._id, username: user.username},secret,{expiresIn: "1h"})

                    return res.status(200).json({
                        message:"login success",
                        token: token,
                        _id: user._id
                    })
                }

                res.status(401).json({
                    message:"auth failed"
                })
            })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ Error: error })
    });

}

export const deleteUser =  (req, res, next) => {
    userModel.deleteOne({_id: req.params.userid})
    .exec()
    .then(result => {
        console.log(result)
        if (result.deletedCount)
            res.status(200).json({
                message:"user deleted"
            })
        else
            res.status(500).json({ message: "user not found" })
    }
    )
    .catch(error => {
        console.log(error)
        res.status(500).json({ Error: error })
    })

}