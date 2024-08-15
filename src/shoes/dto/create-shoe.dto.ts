import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateShoeDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  brand: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  details: Array<string>;

  @ApiProperty()
  @IsNotEmpty()
  price: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  category: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  color_variation: any;

  @ApiProperty()
  deleteColorVariation?: [];
  @ApiProperty()
  deleteSize?: [];
}
