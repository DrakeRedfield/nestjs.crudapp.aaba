import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'varchar', length: 120 })
  name: string;
}
