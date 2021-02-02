import { Component, OnInit } from '@angular/core';
import jump from 'node_modules/jump.js/dist/jump.module.js';

interface menu {
  name: string,
  active: boolean,
  id: string,
  inViewPort: boolean,
  index: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showLanding = false;
  
  ngOnInit() {
  
  }
  
  smoothScroll (id, mobile: boolean) {
      jump('#'+id, {offset: -50});
  }

  goToContact(){
    window.innerWidth < 1270 ? this.smoothScroll('contact', true) : this.smoothScroll('contact', false);
  }

  onLogoClick() {
    window.innerWidth < 1270 ? this.smoothScroll('home', true) : this.smoothScroll('home', false);
   }

  onShowLanding(e:any) {
    if(e.visible)
      this.showLanding = true;
  }
}