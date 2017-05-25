import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-user-info',
  templateUrl: './card-user-info.component.html',
  styleUrls: ['./card-user-info.component.css']
})
export class CardUserInfoComponent implements OnInit {

  @Input() ID: Number;
  @Input() Name: String;
  @Input() Src: String;
  @Input() EmailId: String;
  @Input() SkypeId: String;
  @Input() MobileNumber: Number;
  @Input() HomeNumber: Number;
  @Input() Extension: Number;
  @Input() Address: String;
  @Output() onAddressClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.ID = 2076;
    this.Name = 'Rohan Agashe';
    this.EmailId = 'rragashe@infocepts.com';
    this.SkypeId = 'rragashe';
    this.MobileNumber = 8087372780;
    this.HomeNumber = 2172740533;
    this.Extension = 1889;
  }

  ngOnInit() {
  }

  onAddrClicked(): void {
    this.onAddressClicked.emit();
  }

}
