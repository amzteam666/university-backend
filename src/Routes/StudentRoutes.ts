import { Router, RequestHandler } from 'express';
import { StudentController } from '../Controllers/StudentController'; 

const router = Router();

router.get('/', StudentController.getAll as RequestHandler);
router.post('/', StudentController.create as RequestHandler);
router.put('/:id', StudentController.update as RequestHandler);
router.delete('/:id', StudentController.delete as RequestHandler);

export default router;
