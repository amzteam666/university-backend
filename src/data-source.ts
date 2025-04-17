import { DataSource } from 'typeorm';
import { University } from './Models/University';
import { Course } from './Models/Course';
import { Student } from './Models/Student';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'shezo',  
  database: 'university-system',  
  synchronize: true,
  logging: false,
  entities: [University, Course, Student],
}); 