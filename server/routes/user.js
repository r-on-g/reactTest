import express from "express";
import {signUp,logIn,deleteUser} from "../controller/user.js"

const router = express.Router()


router.post("/signup", signUp)

router.post("/login", logIn)

router.delete("/:userid", deleteUser )

export default router