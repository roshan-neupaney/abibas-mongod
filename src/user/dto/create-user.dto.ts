import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/authentication/role.enum';

export class CreateUserDto {
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly mobile: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty({ format: 'binary' })
  file?: Express.Multer.File;

  @ApiProperty({
    default: 'USER',
    enumName: 'Role',
    enum: ['SUPERADMIN', 'ADMIN', 'PROVIDERADMIN', 'PROVIDER', 'USER'],
  })
  role: Role;

  @ApiProperty({
    default: 'PENDING',
    enumName: 'Status',
    enum: ['ACTIVE', 'PENDING', 'DELETE'],
  })
  status: string;

  readonly hash: string;
  image_name: string;
}
