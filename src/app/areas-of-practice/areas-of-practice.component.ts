import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas-of-practice',
  templateUrl: './areas-of-practice.component.html',
  styleUrls: ['./areas-of-practice.component.scss']
})
export class AreasOfPracticeComponent implements OnInit {

  constructor() { }
  showAreaOfPractice = [false, false, false, false];
  showHeader = false;
  ngOnInit(): void {
  }

  onAppear(e, index){
    if(e.visible)
      this.showAreaOfPractice[index] = true;
  }

  onShowHeader(e){
    if(e.visible)
      this.showHeader = true;
  }
}
