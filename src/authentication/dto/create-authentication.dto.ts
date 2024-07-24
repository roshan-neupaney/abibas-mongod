import { IsNotEmpty } from "class-validator";
import { Role } from "../role.enum";

export class CreateAuthenticationDto {
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    readonly firstName: string;

    @IsNotEmpty()
    readonly lastName: string;
    
    @IsNotEmpty()
    readonly mobile: string;

    role: Role;
}
