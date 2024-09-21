import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { StatusEnum } from "src/common/all.enum";

export class CreateColorDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    color_code: string;

    @ApiProperty()
    @IsString()
    status: StatusEnum;



}
