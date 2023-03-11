import {addUser,getAllUsers} from '../../../controller/user'
import db from '../../../database/db';

export default async function handler(req,res){
    await db.connect();
    const {method} = req;
    switch (method) {
        case 'GET':
            getAllUsers(req,res)
            break;
        case 'POST':
            addUser(req,res)
            break;
        
        default:
            res.status(404).json({success:false,message:'your method was wrong'})
            break;
    }
}