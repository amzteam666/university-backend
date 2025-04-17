import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { University } from '../Models/University';

const universityRepo = AppDataSource.getRepository(University);

export const getUniversities = async (_: Request, res: Response) => {
  const universities = await universityRepo.find();
  res.json(universities);
};

export const createUniversity = async (req: Request, res: Response) => {
  const { name } = req.body;
  const university = universityRepo.create({ name });
  await universityRepo.save(university);
  res.json(university);
};

export const updateUniversity = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  await universityRepo.update(id, { name });
  res.json({ message: 'University updated' });
};

export const deleteUniversity = async (req: Request, res: Response) => {
  const { id } = req.params;
  await universityRepo.delete(id);
  res.json({ message: 'University deleted' });
};
