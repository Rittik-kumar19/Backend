import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js";
import { asyncError } from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = asyncError(async(req, res, next) => {
    // const token = req.cookies.token

    // console.log(req.cookies.token)  - instead of this we will use destructuring
    // - showing undefined for this we have to use cookies parser - we have use middle ware cookies-parser

    const {token} = req.cookies;
    if(!token) return next(new ErrorHandler("Not Logged In", 401))

    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decodedData._id); 

    next();
})



export const isAdmin = asyncError(async(req, res, next) => {

    // console.log(req.user.role)

    if(req.user.role!=="admin") return next(new ErrorHandler("Only Admin Allowed", 401))
    next();
})