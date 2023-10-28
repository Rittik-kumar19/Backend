import mongoose from "mongoose";

//creating the schema and add this schema to modals
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter Name"],
    },
    description: {
        type: String,
        required: [true, "please enter Description"],
    },
    price: {
        type: Number,
        required: [true, "please enter Price"],
    },
    stock: {
        type: Number,
        required: [true, "please enter Stock"],
    },
    images: [{public_id: String, url: String}],

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

export const Product= mongoose.model("Product", schema)