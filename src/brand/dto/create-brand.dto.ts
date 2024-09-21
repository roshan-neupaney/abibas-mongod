import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { StatusEnum } from 'src/common/all.enum';

export class CreateBrandDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  file?: Express.Multer.File;

  @ApiProperty()
  @IsString()
  status: StatusEnum;

  image_name: string;
}
