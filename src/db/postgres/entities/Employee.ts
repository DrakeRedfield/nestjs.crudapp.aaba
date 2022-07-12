import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Job } from './Job';

@Entity()
export class Employee extends BaseEntity {
  @Column({ type: 'varchar', length: 120 })
  firstName: string;

  @Column({ type: 'varchar', length: 120 })
  lastName: string;

  @ManyToOne(() => Job, (job) => job.employees)
  @JoinColumn({ name: 'jobId' })
  job: Job;
}
