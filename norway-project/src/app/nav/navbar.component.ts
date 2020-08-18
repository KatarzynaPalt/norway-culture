import {Component} from "@angular/core";


@Component({
  selector:'nav-bar',
  templateUrl:'./navbar.component.html',
  styles:[`
    ul{list-style-type: none; margin:0; padding:0; overflow:hidden; background-color:rgba(255,0,0,0.7)}
    li{float:left}
    li a{display:block; color: white; text-align:center; padding: 14px 16px; text-decoration:none}
  `]
})


export class NavbarComponent{}
