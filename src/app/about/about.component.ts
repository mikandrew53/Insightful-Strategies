import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  show = false;
  ngOnInit(): void {
  }

  onPicture(e:any){
    if(e.visible)
      this.show= true;
  }

}
