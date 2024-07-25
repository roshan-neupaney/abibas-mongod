import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateShoeDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    brand: string;

    @ApiProperty()
    @IsNotEmpty()
    size: string;

    @ApiProperty()
    @IsNotEmpty()
    price: string;

    @ApiProperty()
    @IsNotEmpty()
    color: string;

    @ApiProperty()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    category: string;

    @ApiProperty()
    file: Express.Multer.File;

    image_name: string;
    
}
