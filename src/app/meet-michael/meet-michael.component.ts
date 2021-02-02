import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-michael',
  templateUrl: './meet-michael.component.html',
  styleUrls: ['./meet-michael.component.scss']
})
export class MeetMichaelComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit(): void {
  }

  onAppear(e) {
    if(e.visible)
      this.show = true;
  }

}
