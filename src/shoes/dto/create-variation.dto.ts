import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { SizeDto } from "./create-size.dto";

export class VariationDto {
    id?: string;

    color: string;
    
    file?: Express.Multer.File

    sizes: Array<SizeDto>

    image_url: string;

    shoe_id: string;
}