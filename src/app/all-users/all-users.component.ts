import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements AfterContentInit {

  currentViewType: String = 'Card';
  arr = [];

  constructor() {

  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      for (let i = 1; i < 51; i++) {
        this.arr[i] = i;
      }
    }, 200);

  }


  changeView(view: String): void {
    console.log(view);
    if (view === 'Card') {
      if (this.currentViewType !== 'Card') {
        this.currentViewType = 'Card';
      }
    } else if (view === 'List') {
      if (this.currentViewType !== 'List') {
        this.currentViewType = 'List';
      }
    }
  }

}
