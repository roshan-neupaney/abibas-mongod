import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiTags } from '@nestjs/swagger';
import { ImageType, VideoType } from 'src/common/FileType.type';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerVideoOptions } from 'src/common/multer.config';
import { AuthUser } from 'src/common/decorators/user.decorator';

@Controller('video')
@ApiTags('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerVideoOptions))
  create(
    @Body() createVideoDto: CreateVideoDto,
    @UploadedFile() file: VideoType,
    @AuthUser() user: any,
  ) {
    console.log(file.filename)
    createVideoDto.user_id = user.sub;
    createVideoDto.video_name = file.filename;
    return this.videoService.create(createVideoDto);
  }

  @Get()
  findAll() {
    return this.videoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videoService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoService.remove(+id);
  }
}
