import {mongoose} from "mongoose";
const medicalRecordSchema = new mongoose.Schema(
    {
        
    },
    {timestamps:true}
);

export const MedicalRecrod= mongoose.model("MedicalRecord",medicalRecordSchema);