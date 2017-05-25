import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { CardUserInfoComponent } from './card-user-info/card-user-info.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ListUserInfoComponent } from './list-user-info/list-user-info.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    CardUserInfoComponent,
    NavHeaderComponent,
    AllUsersComponent,
    ListUserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DataTablesModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/Search', pathMatch: 'full' },
      { path: 'Search', component: UserSearchComponent},
      {path : 'AllUsers', component : AllUsersComponent }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
