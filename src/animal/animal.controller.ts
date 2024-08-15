import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { uploadImageWithSizes } from 'src/common/helper';
import { ImageType } from 'src/common/FileType.type';
import { multerOptions } from 'src/common/multer.config';

@Controller('animal')
@ApiTags('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createAnimalDto: CreateAnimalDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    let uploadedFile: ImageType | null = null;
    if(file){
      uploadedFile = await uploadImageWithSizes(file)
    }
    if(uploadedFile){
      createAnimalDto.image_name = uploadedFile.fileName;
      }
    return this.animalService.create(createAnimalDto);
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  }
}
