import mongoose from "mongoose";
import bcrypt from "bcrypt";

const DataSchema = mongoose.Schema({
    email:{type: String,required:true,unique:true},
    password:{type: String,required:true}
},{
    timestamps : true,
    versionKey: false,
});

//Middleware to Has the Password

DataSchema.pre("save", async function(next) {
    if(this.isModified("password") || this.isNew){
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
})

const UsersModel = mongoose.model ("users",DataSchema);

export default UsersModel;