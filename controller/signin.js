import User from '../database/models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signIn = async(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);
    if(!email,!password){
        return res.status(404).json({success:false,message:'please fill all fields'})
    }
    try {
        const exist = await User.findOne({email:email});
        if(!exist){ return res.status(404).json({success:false,message:'email or password is incorrect'})}

        const compared = await bcrypt.compare(password,exist.password);  
        if(!compared){ return res.status(404).json({success:false,message:'email or password is incorrect'})}

        const token = jwt.sign({id:exist._id,username:exist.username,email:exist.email},process.env.SECRET,{algorithm:'HS256'})
        return res.status(200).json({success:true,message:'successfully logged in',token:token})
    } catch (error) {
        return res.status(500).json({success:false,message:'server down'})
    }
}