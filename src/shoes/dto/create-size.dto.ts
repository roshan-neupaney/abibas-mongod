import { IsArray, IsNotEmpty } from "class-validator";
import { VariationDto } from "./create-variation.dto";

export class SizeDto {
    id?: string;

    @IsNotEmpty()
    size: string;

    @IsNotEmpty()
    stock: string;

    color_variation_id: string;
}