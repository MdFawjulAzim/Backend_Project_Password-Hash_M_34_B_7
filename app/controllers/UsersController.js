import { loginService,registerService} from "../service/UserServices.js";


// Register Controller

export const register = async(req,res)=>{
    let result = await registerService(req);
    return res.json(result);
}

//login Controller

export const login = async(req,res)=>{
    let result = await loginService(req,res);
    return res.json(result);
}