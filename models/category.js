import mongoose from "mongoose";

//creating the schema and add this schema to modals
const schema = new mongoose.Schema({
    category:{
        type:String,
        required:[true,"Please Enter Category"]
    }
})

export const Category= mongoose.model("Category", schema)