import { Component } from '@angular/core';
import { MENU_ITEMS } from './menuitems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu = MENU_ITEMS;
  title = 'tanoa';
  
}
