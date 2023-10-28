import DataUriParser from 'datauri/parser.js'
import path from 'path'
import { createTransport } from 'nodemailer';

export const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString()
    return parser.format(extName, file.buffer)
}

export const sendToken = (user, res,message,statusCode) => {
    const token = user.generateToken()

    res.status(statusCode).cookie("token", token, {
        //true - only work with frontend
        ...cookieOptions,
        expires: new Date(Date.now() + 15*24*60*60*1000)
    }).json({
        success:true,
        message: message
    });
}

export const cookieOptions = {
    secure:process.env.NODE_ENV=== "Development" ? false : true,
    httpOnly:process.env.NODE_ENV=== "Development" ? false : true,
    samesite:process.env.NODE_ENV=== "Development" ? false : "none",
}

export const sendEmail = async(subject,to,text) =>{
    const transporter = createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.HTTP_USER,
          pass: process.env.SMTP_PASS
        }
    })

    await transporter.sendMail({
        to,
        subject,
        text,
    })
}