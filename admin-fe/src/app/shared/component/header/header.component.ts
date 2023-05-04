import { Component,EventEmitter,OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
[x: string]: any;
  
  @Output() openToogle: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {  
  }

  toggleSideBar(){
    this.openToogle.emit();
  }

  }
