import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  constructor() { }

  
  now = new Date();
  today = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
  selectedSunday = new Date(this.today.setDate(this.today.getDate()-this.today.getDay()));
  
  dates: Date[] = [];
  
  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      var x = new Date();
      x.setDate(this.selectedSunday.getDate() + i);
      this.dates.push(x);
    }
  }

  

}
