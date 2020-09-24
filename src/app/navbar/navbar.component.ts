import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();
  
  refresh(){
    alert("Event emmiter triggered Up!");
  	this.onRefresh.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
