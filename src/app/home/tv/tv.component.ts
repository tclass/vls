import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  providers: [],
  styleUrls: ['./tv.component.css'],
  animations: [
    trigger('slideInOut', [
      state('expanded', style({
        transform: 'translateY(0)', height: '500px', 'opacity': 1
      })),
      state('collapsed', style({
        transform: 'translateY(-800px)', height: '0px', 'opacity': 0
      })),
      transition('expanded => collapsed', animate('1000ms ease-in-out')),
      transition('collapsed => expanded', animate('1000ms ease-in-out'))
    ])
  ]
})
export class TVComponent {

  tvurl;
  menu = 'collapsed';

  constructor() {
  }

  // TODO: change naming
  @Input()
  set settvurl(tvurl: string) {
     this.tvurl = tvurl;
     if (tvurl !== undefined) {
        this.menu = 'expanded';
     }
  }

  collapseTV() {
    this.menu = 'collapsed';
  }
}
