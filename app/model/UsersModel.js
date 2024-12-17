import mongoose from "mongoose";
import bcrypt from "bcrypt";

const DataSchema = mongoose.Schema({
    email:{type: String,required:true,unique:true},
    password:{type: String,required:true}
},{
    timestamps : true,
    versionKey: false,
});

const UsersModel = mongoose.model ("users",DataSchema);

export default UsersModel;