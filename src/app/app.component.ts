import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './menuitems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router) { }

  menu = MENU_ITEMS;
  title = 'tanoa';
  menuScreens = [
    '/timesheet',
  ]
  
}
