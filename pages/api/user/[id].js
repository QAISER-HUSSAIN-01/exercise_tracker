import {deleteUser,getUser,updateUser} from '../../../controller/user'
import db from '../../../database/db';

export default async function handler(req, res) {
    await db.connect();
    const { method } = req;
    switch (method) {
        case 'DELETE':
            deleteUser(req, res);
            break;
        case 'PATCH':
            updateUser(req, res);
            break;
        case 'GET':
            getUser(req, res);
            break;
        default:
            res.send({ status: false, message: 'wrong request' });
            break;
    }
}