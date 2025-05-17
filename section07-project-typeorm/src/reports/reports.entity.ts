import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reports')
export class ReportsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  secret: string;
}
