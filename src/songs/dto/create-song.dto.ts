import { IsNotEmpty, IsString } from "class-validator";

export class CreateSongDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly artist: string[];

    @IsNotEmpty()
    @IsString()
    readonly lyrics: string;

  }