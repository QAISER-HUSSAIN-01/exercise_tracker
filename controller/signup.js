import User from '../database/models/users';
import bcrypt from 'bcrypt'

export const signUp = async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username,!email,!password){
        return res.status(404).json({success:false,message:'please fill all fields'})
    }
    try {
        const exist = await User.findOne({email:email});
        if(exist){ return res.status(302).json({success:false,message:'already exist this email'})}
        const hashed = await bcrypt.hash(password,10);  
        const created = await User.create({username:username,email:email,password:hashed})
        if(!created){return res.status(404).json({success:false,message:'user not created'})}
        return res.status(201).json({success:true,message:'successfully registered',data:created})
    } catch (error) {
        return res.status(500).json({success:false,message:'server error'})
    }
}