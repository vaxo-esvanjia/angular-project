import { Component, OnInit } from '@angular/core';
import { faFacebookF,faDribbble, faBehance, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  faFacebook=faFacebookF
  faTwiter=faTwitter
  faInstagram=faInstagram
  faBehance=faBehance
  faDribbble=faDribbble
  body = document.querySelector("body") as HTMLBodyElement
   constructor() { }

  ngOnInit(): void {
  }
scroll1(){
  window.scroll({ 
    top: 1200, 
     
    behavior: 'smooth' 
});

}
}
