import {addExercise,deleteExercise,getAllExercises,getExercise,updateExercise} from '../../../controller/exercise'
import db from '../../../database/db';

export default async function handler(req,res){
    await db.connect();
    const {method} = req;
    switch (method) {
        case 'GET':
            getAllExercises(req,res)
            break;
        case 'POST':
            addExercise(req,res)
            break;
        
        default:
            res.status(404).json({success:false,message:'your method was wrong'})
            break;
    }
}