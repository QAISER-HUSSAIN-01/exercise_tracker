import { signUp } from '../../controller/signup';
import db from '../../database/db';

export default async function handler(req, res) {
    await db.connect();
    return signUp(req, res)
}
