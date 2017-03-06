import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { ListService, Video } from '../list.service';


@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  providers: []
})
export class CreateDialogComponent {

  title = '';
  url = '';

  constructor(public dialogRef: MdDialogRef<CreateDialogComponent>, private listService: ListService) {}

  addVideo() {
    this.listService.addVideo(1, new Video(1, this.title, '', this.url));
    this.dialogRef.close();
  }
}
