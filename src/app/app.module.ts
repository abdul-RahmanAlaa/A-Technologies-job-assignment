import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactSearchBarComponent } from './components/contact-search-bar/contact-search-bar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ContactChartComponent } from './components/contact-chart/contact-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainMenuComponent,
    AsideMenuComponent,
    CalendarComponent,
    CommentsComponent,
    ContactsTableComponent,
    MainBodyComponent,
    ContactDetailsComponent,
    ContactSearchBarComponent,
    ContactChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
