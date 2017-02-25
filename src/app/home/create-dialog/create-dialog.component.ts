import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  providers: []
})
export class CreateDialogComponent {

constructor(public dialogRef: MdDialogRef<CreateDialogComponent>) {

}
}
