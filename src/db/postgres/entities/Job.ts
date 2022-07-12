import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Employee } from './Employee';

@Entity()
export class Job extends BaseEntity {
  @Column({ type: 'varchar', length: 120 })
  name: string;

  @OneToMany(() => Employee, (employee) => employee.job)
  employees: Employee[];
}
