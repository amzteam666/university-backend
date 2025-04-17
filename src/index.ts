import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source'; 
import universityRoutes from './Routes/university.routes';
import CourseRoutes from './Routes/CourseRoutes';
import StudentRoutes from './Routes/StudentRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/', CourseRoutes)
app.use('/students', StudentRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.use('/', universityRoutes);
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error: any) => console.error('DB Error:', error));
