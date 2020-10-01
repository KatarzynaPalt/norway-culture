import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <nav-bar></nav-bar>
    <header></header>
    <section><festivals-list></festivals-list></section>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'norway-project';
}
