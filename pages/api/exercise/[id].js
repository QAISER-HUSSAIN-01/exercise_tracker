import {deleteExercise,getExercise,updateExercise} from '../../../controller/exercise'
import db from '../../../database/db';

export default async function handler(req, res) {
    await db.connect();
    const { method } = req;
    switch (method) {
        case 'DELETE':
            deleteExercise(req, res);
            break;
        case 'PATCH':
            updateExercise(req, res);
            break;
        case 'GET':
            getExercise(req, res);
            break;
        default:
            res.send({ status: false, message: 'wrong request' });
            break;
    }
}