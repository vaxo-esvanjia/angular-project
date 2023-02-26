import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-ourclients',
  templateUrl: './ourclients.component.html',
  styleUrls: ['./ourclients.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurclientsComponent implements OnInit {
  swiperConfig: any = {

   

    breakpoints: {
      1200:{
        slidesPerView: 6, 
      },
        992: {
            
          slidesPerView: 5, 
        },
        700:{
          slidesPerView:4,
        },
        500:{
          slidesPerView:3,
        },
        300:{
          slidesPerView:2,
        },
        0:{
          slidesPerView:1,
          spaceBetween: 10,
        }
        
    }
}
swiperConfig2: any = {
  slidesPerView: '1',

  loop:true,
  

  breakpoints: {
 
      
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
