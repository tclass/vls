import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

// TODO: make own file
export class Video {
    id: number;
    title: string;
    frame: string;
    thumbnail: string;
    safeURL: SafeUrl;
    public constructor(id: number, title: string, thumbnail: string, frame: string) {
        this.id = id;
        this.title = title;
        this.frame = frame;
        this.thumbnail = thumbnail;
    }
}

// TODO: make own file
export class List {
    id: number;
    title: string;
    videos: Array<Video>;
    public constructor(id: number, title: string, videos: Array<Video>) {
        this.id = id;
        this.title = title;
        this.videos = videos;
    }
}

export class ListService {

    lists: List[] = new Array<List>();
    videos: Video[] = new Array<Video>();
    videos2: Video[] = new Array<Video>();

    public constructor() {
    // Mock lists and videos
    this.videos.push(new Video(
        1,
        'Ross Kemp Extreme World Season 3',
        'http://cdn.embed.ly/providers/logos/imgur.png',
        '',
    ));

    this.videos2.push(new Video(
        2,
        'Beste Doku! 2017 - New World Order',
        'http://cdn.embed.ly/providers/logos/imgur.png',
        ''
    ));

    this.lists.push(new List(1, 'Educational', this.videos));
    this.lists.push(new List(2, 'Math', this.videos2));
    }

    getLists(): Promise<Array<List>> {
        return Promise.resolve(this.lists);
    }

    addVideo(listID: number, video: Video) {
        this.lists[listID].videos.push(video);
    }

    removeVideo(list: List, video: Video) {
        const ls = this.lists.indexOf(list);
        const v = this.lists[ls].videos.indexOf(video);
        this.lists[ls].videos.splice(v, 1);
    }

    addList(list: List) {
        this.lists.push(list);
    }


}
