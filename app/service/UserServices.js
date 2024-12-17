import bcrypt from "bcrypt";
import UserModel from "../model/UsersModel.js";
import { register } from './../controllers/UsersController.js';

export const registerService = async (req) =>{
    try{
        const {email,password} = req.body;
        let data = await UserModel.create({email,password});
        return { status : "success" ,data: data };
    }catch(e){
        return { status : "error" , message: e.message };
    }

}

export const loginService = async (req,res) =>{
    try{
        const {email,password} = req.body;
        let user = await UserModel.findOne({email});
        if(!user) return { status : "error" , message: "User not found" };
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return { status : "error" , message: "Invalid credentials" };


        return {status : "Login successful"}
    }catch(e){
        return { status : "error" , message: e.message };
    }
}