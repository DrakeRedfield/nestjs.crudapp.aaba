import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { JobService } from './services';
import { CreateJobDTO, UpdateJobDTO } from './utils/interfaces';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  getJobs() {
    return this.jobService.getAllJobs();
  }

  @Get(':id')
  getJobById(@Param('id', ParseIntPipe) id: number) {
    return this.jobService.getJobById(id);
  }

  @Post()
  create(@Body() createJobDTO: CreateJobDTO) {
    return this.jobService.createJob(createJobDTO);
  }

  @Put(':id')
  updateJob(
    @Body() updateJobDTO: UpdateJobDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.jobService.updateJob(id, updateJobDTO);
  }

  @Delete(':id')
  deleteJob(@Param('id', ParseIntPipe) id: number) {
    return this.jobService.deleteJob(id);
  }
}
