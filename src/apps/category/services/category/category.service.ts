import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/db/postgres/entities';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  getAllCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  getCategoryById(id: number): Promise<Category> {
    return this.categoryRepository.findOneBy({ id });
  }

  createCategory(
    categoryData: Omit<Partial<Category>, 'id'>,
  ): Promise<Category> {
    return this.categoryRepository.save(categoryData);
  }

  async updateCategory(
    id: number,
    newCategoryData: Omit<Partial<Category>, 'id'>,
  ): Promise<Category> {
    const previousCategoryData = await this.getCategoryById(id);

    if (!previousCategoryData)
      throw new NotFoundException("Category doesn't exist.");

    const updatedCategoryData = Object.assign(
      previousCategoryData,
      newCategoryData
    );
    return this.categoryRepository.save(updatedCategoryData);
  }

  deleteCategory(id: number): Promise<DeleteResult> {
    return this.categoryRepository.softDelete(id);
  }
}
