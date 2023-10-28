import mongoose from "mongoose";

//To connect to database

export const connectDB = async() => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URI,{
            dbName:"mobileEcommerceApplication"
        })
        console.log(`Server connected to database ${connection.host}`)
    }
    catch (error){
        console.log("Some error occured", error)
        process.exit(1)
        //shutdown the server
    }
}