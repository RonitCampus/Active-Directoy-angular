import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  arr= [];

  constructor() {
    for (let i = 1; i < 51; i++) {
      this.arr[i] = i;
    }
  }
}
