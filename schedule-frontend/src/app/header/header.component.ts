import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  disp: boolean = false;

  dispDiv():void {
    this.disp = !(this.disp);
    console.log(this.disp);
  }

}
