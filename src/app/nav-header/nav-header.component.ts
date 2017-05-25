import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  isSearchActive: Boolean = true;

  constructor() { }

  ngOnInit() {

  }

  changeActiveLink(activeLink: any): void {
    if (activeLink === '/Search') {
      this.isSearchActive = true;
    } else {
      this.isSearchActive = false;
    }
  }

}
