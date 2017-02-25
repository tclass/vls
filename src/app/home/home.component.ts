import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { TVComponent } from './tv/tv.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private tvurl: string;
  sanitizer;
  video = { 'title': 'Ross Kemp Extreme World Season 3 Papua New Guinea', 'frame': 'https://www.youtube.com/embed/lnRR-lQTKMM?showinfo=0', safeURL: null };
  video2 = { 'title': 'Beste Doku! 2017 - New World Order - Bewußtsein auf höherer Ebene', 'frame': 'https://www.youtube.com/embed/lnRR-lQTKMM?showinfo=0', safeURL: null };
  videos = [this.video, this.video2];
  lists = [{videos: this.videos, title: 'CompSci Videos'},{videos: this.videos, title: 'Educational'}]

  constructor(private _sanitizer: DomSanitizer, public dialog: MdDialog) {
    this.sanitizer = this._sanitizer;
  }

  ngOnInit() {
    for (const video of this.videos) {
      if (video != null) {
        video.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(video.frame);
      }
    }
  }

  activateTV() {
    this.tvurl = 'here is something';
  }

  openDialog() {
    this.dialog.open(CreateDialogComponent);
  }
}


