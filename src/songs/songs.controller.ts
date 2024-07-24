import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('songs')
@ApiTags('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Get()
  findAll() {
    try {
        return this.songsService.findAll();;
    } catch (error) {
        console.log('this is an ', error)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Fetched songs with id: ${id}`;
  }

  @Post()
  create(@Body() createSongdto: CreateSongDto) {
    return this.songsService.create(createSongdto);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Song ${id} updated Successfully`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songsService.delete(id);
  }
}
