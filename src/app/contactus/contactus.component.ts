import { Component, OnInit } from '@angular/core';

import { faFacebookF,faDribbble, faBehance, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  faFacebook=faFacebookF
  faTwiter=faTwitter
  faInstagram=faInstagram
  faBehance=faBehance
  faDribbble=faDribbble
  constructor() { }

  ngOnInit(): void {
  }

}
