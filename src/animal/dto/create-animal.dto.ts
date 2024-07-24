// import { Express } from "express";

import { ApiProperty } from "@nestjs/swagger";

export class CreateAnimalDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    animal_category_id: string;
    
    @ApiProperty({ type: 'string', format: 'binary' })
    file: Express.Multer.File;

    image_name: string;
}
