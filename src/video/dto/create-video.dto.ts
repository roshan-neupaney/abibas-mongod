import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateVideoDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;

  user_id: string;

  video_name: string;
}
