import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Course } from '../Models/Course';

const courseRepo = AppDataSource.getRepository(Course);

export const getCourses = async (_: Request, res: Response) => {
  try {
    const courses = await courseRepo.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  console.log('📥 POST /courses', req.body);
  try {
    const { name, universityId } = req.body;
    const course = courseRepo.create({ name, universityId });
    const saved = await courseRepo.save(course);
    console.log('Saved:', saved);
    res.json(saved);
  } catch (err) {
    console.error('Error saving course:', err);
    res.status(500).json({ message: 'Error saving course' });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, universityId } = req.body;
    await courseRepo.update(id, { name, universityId });
    res.json({ message: 'Course updated' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating course' });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await courseRepo.delete(id);
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting course' });
  }
};
