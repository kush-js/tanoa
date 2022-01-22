import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  textA = 'Timesheets that don\'t suck.';
  textB = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.typeText();
  }

  async typeText() {
    for (let i = 0; i < this.textA.length; i++) {
      await this.timeout(50);
      this.textB = this.textB + this.textA.charAt(i);
    }
  }
  
  timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  

  
  



}
