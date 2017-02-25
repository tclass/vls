import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  providers: [HomeComponent],
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
}
