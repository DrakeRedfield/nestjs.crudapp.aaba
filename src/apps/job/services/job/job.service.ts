import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from '../../../../db/postgres/entities';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  createJob(jobData: Omit<Partial<Job>, 'id'>): Promise<Job> {
    return this.jobRepository.save(jobData);
  }

  getAllJobs(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  getJobById(id: number): Promise<Job> {
    return this.jobRepository.findOneBy({ id });
  }

  async updateJob(
    id: number,
    newJobData: Omit<Partial<Job>, 'id'>,
  ): Promise<Job> {
    const previousJobData = await this.jobRepository.findOneBy({ id });
    if (!previousJobData) throw new NotFoundException("Job doesn't exist");

    const editedJob = Object.assign(previousJobData, newJobData);
    return this.jobRepository.save(editedJob);
  }

  deleteJob(id: number): Promise<UpdateResult> {
    return this.jobRepository.softDelete(id);
  }
}
