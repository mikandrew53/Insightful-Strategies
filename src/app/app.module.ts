import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AreasOfPracticeComponent } from './areas-of-practice/areas-of-practice.component';
import { MeetMichaelComponent } from './meet-michael/meet-michael.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AreasOfPracticeComponent,
    MeetMichaelComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
