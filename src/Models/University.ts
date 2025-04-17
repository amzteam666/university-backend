import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class University {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
