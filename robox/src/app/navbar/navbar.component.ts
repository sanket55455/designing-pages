import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output()
  sideClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  todayDate = new Date();

  ngOnInit() {
  }

  minimizeSidebar() {
    console.log('minimizeSidebar');
    this.sideClick.emit(true);
  }

}
