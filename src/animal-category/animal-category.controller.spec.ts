import { Test, TestingModule } from '@nestjs/testing';
import { AnimalCategoryController } from './animal-category.controller';
import { AnimalCategoryService } from './animal-category.service';

describe('AnimalCategoryController', () => {
  let controller: AnimalCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalCategoryController],
      providers: [AnimalCategoryService],
    }).compile();

    controller = module.get<AnimalCategoryController>(AnimalCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
