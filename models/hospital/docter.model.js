import {mongoose} from "mongoose";
const hoursForHospi = new mongoose.Schema(
    {
        workInhospital:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Hospital" 
            },
        hours:{
            type:Number,
            required:true
        }
    }
);
const DoctorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        salary:{
            type:Number,
            required:true
        },
        qualification:{
            type:String,
            required:true
        },
        specilization:{
            type:String,
            required:true
        },
        hoursHospitals:[
            hoursForHospi
        ]
    },
    {timestamps:true}
);

export const Doctor= mongoose.model("Doctor",DoctorSchema);