import Router from 'express'
import auth from '../middileware/auth';
import { addSession } from '../controler/session/addSession';

const router = Router();

router.post('/new',auth, addSession)

export default router