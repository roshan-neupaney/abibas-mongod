import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateRatingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  shoe_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive({ message: 'Rating must be a positive number' })
  rate: number;

  user_id: string
}
