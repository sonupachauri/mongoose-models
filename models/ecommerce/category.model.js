import mongoose from "mongoose"
import { User } from "./user.model";

const categorySchema= mongoose.Schema(
    {
     name:{
        type:String,
        required: true,
        unique:true
     },
     createBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
     }

    },
    {timestamps:true}
);

export const Category = mongoose.model("Category", categorySchema);