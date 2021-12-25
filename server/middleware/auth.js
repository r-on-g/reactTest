import jwt from "jsonwebtoken"

const secret = "$x^2X45uLRmpD6Z!F&Gb"

const auth = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, secret)
        req.userData = decoded
        next();
    }
    catch (error) {
        return res.status(401).json({
            message:"auth failed"
        })
    }
}

export default auth