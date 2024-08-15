import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCartDto {
    @ApiProperty()
    @IsNotEmpty()
    product_id: string;

    @ApiProperty()
    @IsNotEmpty()
    size: string;
    
    @ApiProperty()
    @IsNotEmpty()
    color: string;

    user_id: string;
    count: number;
}