import bcrypt from "bcrypt";
import UserModel from "../model/UsersModel.js";
import { register } from './../controllers/UsersController';

export const registerService = async (req) =>{
    try{

        return { status : "success" ,data: data };
    }catch(e){
        return { status : "error" , message: e.message };
    }

}

export const loginService = async (req,res) =>{
    try{


        return {status : "Login successful"}
    }catch(e){
        return { status : "error" , message: e.message };
    }
}