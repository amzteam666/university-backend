import { Router } from 'express';
import {getUniversities,createUniversity,updateUniversity,deleteUniversity} from '../Controllers/UniversityController';

const router = Router();

router.get('/universities', getUniversities);
router.post('/universities', createUniversity);
router.put('/universities/:id', updateUniversity);
router.delete('/universities/:id', deleteUniversity);

export default router;
