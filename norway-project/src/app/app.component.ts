import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <nav-bar></nav-bar>
    <festivals-list></festivals-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'norway-project';
}
