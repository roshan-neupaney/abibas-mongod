import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateInteractionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    shoe_id: string

    @ApiProperty()
    user_id: string
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    action_type: string

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    interaction_score: number

}
