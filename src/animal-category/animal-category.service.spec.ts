import { Test, TestingModule } from '@nestjs/testing';
import { AnimalCategoryService } from './animal-category.service';

describe('AnimalCategoryService', () => {
  let service: AnimalCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimalCategoryService],
    }).compile();

    service = module.get<AnimalCategoryService>(AnimalCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
