import { Role } from "src/authentication/role.enum";

export type ImageType = {
    originalName: string;
    fileName: string;
    mimeType: string;
    size: number;
    url: string;
    path: string;
    sizes: Array<{name: string, fileName:string, url: string}>
}
export type VideoType = {
    originalName: string;
    filename: string;
    mimeType: string;
    size: number;
    url: string;
    path: string;
    sizes: Array<{name: string, fileName:string, url: string}>
}

export type AuthUserType = {
    sub: string;
    email: string;
    role: Role;
    iat: number;
    exp: number;
}