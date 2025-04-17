import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Student } from '../Models/Student';
import { University } from '../Models/University';
import { Course } from '../Models/Course';

const studentRepo = AppDataSource.getRepository(Student);
const universityRepo = AppDataSource.getRepository(University);
const courseRepo = AppDataSource.getRepository(Course);

export class StudentController {
  static async getAll(req: Request, res: Response) {
    const students = await studentRepo.find({
      relations: ['university', 'courses'],
    });
    res.json(students);
  }

  static async create(req: Request, res: Response) {
    const { name, universityId, courseIds } = req.body;

    const university = await universityRepo.findOneBy({ id: universityId });
    if (!university) return res.status(404).json({ message: 'University not found' });

    const courses = await courseRepo.findByIds(courseIds);
    const student = studentRepo.create({ name, university, courses });
    await studentRepo.save(student);

    res.status(201).json({ message: 'Student created', student });
  }

  static async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { name, universityId, courseIds } = req.body;

    const student = await studentRepo.findOne({ where: { id }, relations: ['courses', 'university'] });
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const university = await universityRepo.findOneBy({ id: universityId });
    const courses = await courseRepo.findByIds(courseIds);

    student.name = name;
    student.university = university as University;
    student.courses = courses;

    await studentRepo.save(student);
    res.json({ message: 'Student updated', student });
  }

  static async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const student = await studentRepo.findOneBy({ id });

    if (!student) return res.status(404).json({ message: 'Student not found' });

    await studentRepo.remove(student);
    res.json({ message: 'Student deleted' });
  }
}
