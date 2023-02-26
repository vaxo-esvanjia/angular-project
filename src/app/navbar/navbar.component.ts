import { Component, OnInit } from '@angular/core';
import { faFacebookF,faDribbble, faBehance, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faFacebook=faFacebookF
  faTwiter=faTwitter
  faInstagram=faInstagram
  faBehance=faBehance
  faDribbble=faDribbble
  constructor() { }
  nav:boolean=false
  ngOnInit(): void {
  }
  menu(){
    this.nav=true
    console.log(this.nav)
  }
  menux(){
    this.nav=false
  }
}
