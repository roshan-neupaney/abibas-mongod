import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private songs = [];

    create(song){
        this.songs.push(song);
        return this.songs;
    }

    findAll(){
        // throw new Error('error 1')
        return this.songs;
    }

    delete(id){
        const filteredData = this.songs.filter(items => items.id !== id);
        this.songs = filteredData;
        return this.songs;
    }
}
