import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styles: [`
    .indexStyle {
      background-color: blue;
      color: white;
    }
  `]
})
export class AssignmentThreeComponent implements OnInit {
  isDisplayed = false;
  clickIndex = 0;
  mouseClicks = [];

  constructor() { }

  toggleDisplay( event: Event) {
    this.clickIndex ++;
    this.mouseClicks.push(this.clickIndex);
    console.log(this.mouseClicks);

    if (this.isDisplayed === true) {
      this.isDisplayed = false;
    } else {
      this.isDisplayed = true
    }
  }
  ngOnInit(): void {
  }

}
