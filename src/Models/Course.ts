import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { University } from './University';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => University, { eager: true })
  @JoinColumn({ name: 'universityId' })
  university: University;

  @Column()
  universityId: number;
}
