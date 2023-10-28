import express from "express";
import { login, signUp, getMyProfile, logOut, updateProfile, changePassword, updatePic, forgetpassword, resetpassword } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router()

// router.get("/me", ()=>{})

// router.route("/me").get(login)
router.post("/login", login)
router.post("/new", singleUpload, signUp)
router.get("/me", isAuthenticated,getMyProfile)
router.get("/logout", isAuthenticated,logOut)



//updating routes
router.put("/updateprofile", isAuthenticated, updateProfile)
router.put("/changepassword", isAuthenticated, changePassword)
router.put("/updatepic", isAuthenticated, singleUpload, updatePic)


//forget password and reset password

router.route("/forgetpassword").post(forgetpassword).put(resetpassword);





export default router