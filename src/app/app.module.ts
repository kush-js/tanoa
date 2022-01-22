import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbMenuModule, NbMenuService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule } from '@nebular/theme';
import { NbButtonModule } from '@nebular/theme';
import { NbSidebarModule } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TimesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbSidebarModule,
    NbEvaIconsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    Ng2SmartTableModule,
   
  ],
  providers: [NbSidebarService, NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
