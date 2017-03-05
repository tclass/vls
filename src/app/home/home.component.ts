import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { TVComponent } from './tv/tv.component';
import { ListService, List } from './list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MdDialog, ListService],
  entryComponents: [CreateDialogComponent]
})
export class HomeComponent implements OnInit {

  private tvurl: string;
  private sanitizer;
  private lists = [];

  constructor(private _sanitizer: DomSanitizer, public dialog: MdDialog, private listService: ListService) {
  }

  ngOnInit() {
    this.listService.getLists().then(l => {
      this.lists = l;
      for (const list of this.lists) {
        for (const video of list.videos) {
          if (video != null) {
            video.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(video.frame);
          }
        }
      }
    });
  }

  activateTV(video) {
    this.tvurl = video.safeURL;
  }

  openDialog() {
    this.dialog.open(CreateDialogComponent);
  }
}