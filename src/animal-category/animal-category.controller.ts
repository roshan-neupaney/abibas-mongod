import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalCategoryService } from './animal-category.service';
import { CreateAnimalCategoryDto } from './dto/create-animal-category.dto';
import { UpdateAnimalCategoryDto } from './dto/update-animal-category.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('animal-category')
@ApiTags('animal-category')
export class AnimalCategoryController {
  constructor(private readonly animalCategoryService: AnimalCategoryService) {}

  @Post()
  create(@Body() createAnimalCategoryDto: CreateAnimalCategoryDto) {
    return this.animalCategoryService.create(createAnimalCategoryDto);
  }

  @Get()
  findAll() {
    return this.animalCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalCategoryDto: UpdateAnimalCategoryDto) {
    return this.animalCategoryService.update(+id, updateAnimalCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalCategoryService.remove(+id);
  }
}
