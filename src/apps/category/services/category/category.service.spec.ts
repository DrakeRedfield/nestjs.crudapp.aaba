import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
import { Category } from '../../../../db/postgres/entities/Category';
import { Repository } from 'typeorm';
import { getRepositoryConfig } from '../../../../utils/test/repositoryConfig.provider';

describe('CategoryService', () => {
  let service: CategoryService;
  let categoryRepository: Repository<Category>;

  // Global Data
  let categoryCreated: Category;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService, getRepositoryConfig(Category)],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    categoryRepository = module.get<Repository<Category>>(
      getRepositoryToken(Category),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('categoryRepository should be defined', () => {
    expect(categoryRepository).toBeDefined();
  });

  describe('CRUD Category', () => {
    it('Should create a new category', async () => {
      const newCategoryName = 'New Category Testing';
      categoryCreated = await service.createCategory({ name: newCategoryName });

      return expect(categoryCreated?.name).toBe(newCategoryName);
    });
  });
});
