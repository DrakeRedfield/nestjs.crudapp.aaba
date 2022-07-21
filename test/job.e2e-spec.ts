import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import type { Job } from '../src/db/postgres/entities';

describe('Job Controller (e2e)', () => {
  let app: INestApplication;
  let newJob: Job;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/job (POST) should add new job', () => {
    return request(app.getHttpServer())
      .post('/job')
      .set('Content-type', 'application/json')
      .send({ name: 'Pet' })
      .expect(HttpStatus.CREATED)
      .then((response) => {
        newJob = response.body;
      });
  });

  it('/job (GET) should return all registered categories', () => {
    return request(app.getHttpServer()).get('/job').expect(HttpStatus.OK);
  });

  it('/job/id (GET) should a job created', async () => {
    const response = await request(app.getHttpServer()).get(
      `/job/${newJob.id}`,
    );
    return expect(response.body.id).toBe(newJob.id);
  });

  it('/job/id (PUT) should update the job name', async () => {
    const newJobName = 'Pet Updated';
    const response = await request(app.getHttpServer())
      .put(`/job/${newJob.id}`)
      .send({ name: newJobName });
    return expect(response.body.name).toBe(newJobName);
  });

  it('/job/id (Delete) should update the job name', () => {
    return request(app.getHttpServer())
      .delete(`/job/${newJob.id}`)
      .expect(HttpStatus.OK);
  });
});
