import * as path from 'path';
import { ImageType } from './FileType.type';
import sharp from 'sharp';

export const UploadImageWithSizes =  async(
  file: Express.Multer.File,
): Promise<ImageType> => {
  const ext = path.extname(file.originalname);
  const randomNumer1 = Math.floor(Math.random() * (1000000 - 10 + 1) + 10);
  const randomNumer2 = Math.floor(Math.random() * (1000000 - 10 + 1) + 10);
  const fileName = `${randomNumer1}-${randomNumer2}${ext}`;
  const filePath = path.join(process.cwd(), 'public','images')
  // const fileBuffer = await sharp(file.buffer).toBuffer();
//   const sizes = [
//     {name: 'small', size: 300},
//     {name: 'medium', size: 600},
//     {name: 'large', size: 1000},
//   ]

  const uploadedFile: ImageType = {
    originalName: file.originalname,
    fileName: fileName,
    path: `${filePath}/${fileName}`,
    mimeType: file.mimetype,
    size: file.size,
    sizes: [],
    url: `${filePath}/${fileName}`
  }

  return uploadedFile;
};
