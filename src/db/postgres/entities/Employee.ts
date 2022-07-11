import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Job } from './Job';

@Entity()
export class Employee extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToOne(() => Job, (job) => job.employee)
  job: Job;
}
