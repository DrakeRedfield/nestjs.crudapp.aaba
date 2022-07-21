import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import type { Category } from '../src/db/postgres/entities';

describe('Category Controller (e2e)', () => {
  let app: INestApplication;
  let newCategory: Category;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/category (POST) should add new category', () => {
    return request(app.getHttpServer())
      .post('/category')
      .set('Content-type', 'application/json')
      .send({ name: 'Pet' })
      .expect(HttpStatus.CREATED)
      .then((response) => {
        newCategory = response.body;
      });
  });

  it('/category (GET) should return all registered categories', () => {
    return request(app.getHttpServer()).get('/category').expect(HttpStatus.OK);
  });

  it('/category/id (GET) should a category created', async () => {
    const response = await request(app.getHttpServer()).get(
      `/category/${newCategory.id}`,
    );
    return expect(response.body.id).toBe(newCategory.id);
  });

  it('/category/id (PUT) should update the category name', async () => {
    const newCategoryName = 'Pet Updated';
    const response = await request(app.getHttpServer())
      .put(`/category/${newCategory.id}`)
      .send({ name: newCategoryName });
    return expect(response.body.name).toBe(newCategoryName);
  });

  it('/category/id (Delete) should update the category name', () => {
    return request(app.getHttpServer())
      .delete(`/category/${newCategory.id}`)
      .expect(HttpStatus.OK);
  });
});
