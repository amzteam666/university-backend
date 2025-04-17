import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn,ManyToMany,JoinTable} from 'typeorm';
import { University } from './University';
import { Course } from './Course';
  
  @Entity()
  export class Student {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @ManyToOne(() => University, { eager: true })
    @JoinColumn({ name: 'universityId' })
    university: University;
  
    @Column()
    universityId: number;
  
    @ManyToMany(() => Course, { eager: true })
    @JoinTable()
    courses: Course[];
  }
  