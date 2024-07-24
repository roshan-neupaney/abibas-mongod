export type ImageType = {
    originalName: string;
    fileName: string;
    mimeType: string;
    size: number;
    url: string;
    path: string;
    sizes: Array<{name: string, fileName:string, url: string}>
}