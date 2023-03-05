import { signIn } from '../../controller/signin';
import db from '../../database/db';

export default async function handler(req, res) {
    await db.connect();
    return signIn(req, res)
}
