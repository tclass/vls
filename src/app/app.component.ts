import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CreateDialogComponent } from './home/create-dialog/create-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavComponent, HomeComponent, CreateDialogComponent],
  entryComponents: [CreateDialogComponent]
})
export class AppComponent {

}
