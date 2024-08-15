import * as path from 'path';
import { ImageType } from './FileType.type';
import * as sharp from 'sharp';
import { BadRequestException } from '@nestjs/common';

export async function uploadImageWithSizes(
  file: Express.Multer.File,
): Promise<ImageType> {
  const ext = path.extname(file.originalname)
  const randomNumber1 = Math.floor(Math.random() * (100000000 - 10 + 1)) + 10
  const randomNumber2 = Math.floor(Math.random() * (100000000 - 10 + 1)) + 10
  const filePath = path.join(process.cwd(), 'public', 'uploads', 'images')
  const fileName = `${randomNumber1}-${randomNumber2}${ext}`
  const fileBuffer = await sharp(file.buffer).toBuffer()
  const sizes = [
    { name: 'large', width: 1000 },
    { name: 'medium', width: 600 },
    { name: 'small', width: 300 },
  ]

  const uploadedFile: ImageType = {
    originalName: file.originalname,
    fileName: fileName,
    mimeType: file.mimetype,
    size: file.size,
    url: `${filePath}/${fileName}`,
    path: `${filePath}/${fileName}`,
    sizes: [],
  }

  for (const size of sizes) {
    const resizedBuffer = await sharp(fileBuffer)
      .resize({ width: size.width })
      .toBuffer()
    const resizedFileName = `${size.name}-${randomNumber1}-${randomNumber2}${ext}`
    const resizedFilePath = path.join(filePath, resizedFileName)
    await sharp(resizedBuffer).toFile(resizedFilePath)

    uploadedFile.sizes.push({
      name: size.name,
      fileName: resizedFileName,
      url: `/uploads/images/${resizedFileName}`,
    })
  }

  if (!uploadedFile) {
    throw new BadRequestException('File upload failed')
  }

  return uploadedFile
}

export async function uploadImageWithNoSizes(
  file: Express.Multer.File,
): Promise<ImageType> {
  const ext = path.extname(file.originalname)
  const randomNumber1 = Math.floor(Math.random() * (1000000 - 10 + 1)) + 10
  const randomNumber2 = Math.floor(Math.random() * (1000000 - 10 + 1)) + 10
  const filePath = path.join('./public', 'uploads', 'images')
  const fileName = `${randomNumber1}-${randomNumber2}${ext}`
  const fileBuffer = await sharp(file.buffer).toBuffer();
  await sharp(fileBuffer).toFile(path.join(filePath, fileName))

  const uploadedFile: ImageType = {
    originalName: file.originalname,
    fileName: fileName,
    mimeType: file.mimetype,
    size: file.size,
    url: `${filePath}/${fileName}`,
    path: `${filePath}/${fileName}`,
    sizes: [],
  }

  if (!uploadedFile) {
    throw new BadRequestException('File upload failed')
  }

  return uploadedFile
}
