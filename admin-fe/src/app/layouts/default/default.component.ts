import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  
  sideBarToggle = false;

  sideBarToggler(event: any){
    this.sideBarToggle = !this.sideBarToggle;
  }
}
