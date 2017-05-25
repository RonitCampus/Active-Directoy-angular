import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  animations: [
    trigger('animationToggleAdvanceSearch', [
      state('hidden', style({
        display: 'none',
      })),
      state('visible', style({
        display: 'block',
      })),
      transition('hidden => visible', animate('20ms ease-in')),
      transition('visible => hidden', animate('20ms ease-out'))
    ])
  ]
})
export class UserSearchComponent implements OnInit {

  showAdvanceSearchOptions: boolean;
  state: String = 'hidden';

  constructor() {
    this.showAdvanceSearchOptions = false;
  }

  ngOnInit() {
  }

  toggleAdvanceSearchOptions() {
    this.showAdvanceSearchOptions = !this.showAdvanceSearchOptions;
    this.state = (this.state === 'hidden' ? 'visible' : 'hidden');
  }

}
