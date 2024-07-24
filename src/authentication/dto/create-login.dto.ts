import { IsNotEmpty } from "class-validator";
import { Role } from "../role.enum";

export class CreateLoginDto {
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
    
    role: Role;
}