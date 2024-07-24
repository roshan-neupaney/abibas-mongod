import { IsNotEmpty } from "class-validator";

export class CreateRefreshDto {
    @IsNotEmpty()
    readonly refresh: string;

}