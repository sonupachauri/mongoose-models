import {mongoose} from "mongoose";
const hospitalSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        pincode:{
            type:String
        },
        specializedIn:[{
            type:String
        }],
        likes:{
            type:mongoose.Schema.Types.objectId,
            ref:"Patient"
        }
    },
    {timestamps:true}
);

export const Hospital= mongoose.model("Hospital",hospitalSchema);