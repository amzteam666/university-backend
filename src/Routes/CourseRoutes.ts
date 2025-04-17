import { Router } from 'express';
import {getCourses,createCourse,updateCourse,deleteCourse} from '../Controllers/CourseController';

const router = Router();

router.get('/courses', getCourses);
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

export default router;
