import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/common/multer.config';
import { throwError } from 'rxjs';
import { ShoesType } from './shoes.types';

@Controller('shoes')
@UsePipes(ValidationPipe)
@ApiTags('shoes')
export class ShoesController {
  constructor(private readonly shoesService: ShoesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  create(
    @Body() createShoeDto: CreateShoeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    createShoeDto.image_name = file.filename;
    console.log(file)
    return this.shoesService.create(createShoeDto);
  }

  @Get()
  findAll(@Query() query:ShoesType) {
    return this.shoesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoeDto: UpdateShoeDto) {
    return this.shoesService.update(id, updateShoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoesService.remove(id);
  }
}
