import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularAnimationsSidenavComponent } from './components/angular-animations-sidenav/angular-animations-sidenav.component';
import { PureCssAnimationsSidenavComponent } from './components/pure-css-animations-sidenav/pure-css-animations-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularAnimationsSidenavComponent,
    PureCssAnimationsSidenavComponent
  ],
  imports: [BrowserAnimationsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
