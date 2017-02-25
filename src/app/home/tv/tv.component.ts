import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  providers: [],
  styleUrls: ['./tv.component.css']
})
export class TVComponent {

  @Input() home: HomeComponent;
  @Input() tvurl: string;

  constructor() {
  }
}
