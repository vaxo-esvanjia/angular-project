import { Component, HostListener } from '@angular/core';
import { SwiperOptions } from 'swiper';
interface Item{
  imageSrc:string;
  imageAlt:string;
  imageName:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  scroll2 = false
@HostListener("document:scroll")
  function(){
    if(window.scrollY>1000){
      this.scroll2=true
    }
    else{
      this.scroll2=false
    }
  }
  scrollup(){
    window.scroll({ 
      top: 0, 
       
      behavior: 'smooth' 
  });
  
  }
  galleryData: Item[] = [
    {
      imageSrc: 'https://preview.colorlib.com/theme/glint/images/portfolio/lady-shutterbug.jpg.webp',
      imageAlt: '1',
      imageName:'shutterbug'
    },
    {
      imageSrc: 'https://preview.colorlib.com/theme/glint/images/portfolio/the-beetle.jpg.webp',
      imageAlt: '2',
      imageName:'The Beetle'
    },
    {
      imageSrc: 'https://preview.colorlib.com/theme/glint/images/portfolio/guitarist.jpg.webp',
      imageAlt: '3',
      imageName:'Guitarist'
    },
    {
      imageSrc: 'https://preview.colorlib.com/theme/glint/images/portfolio/woodcraft.jpg.webp',
      imageAlt: '4',
      imageName:'Goodcraft'
    },
    {
      imageSrc: 'https://preview.colorlib.com/theme/glint/images/portfolio/grow-green.jpg.webp',
      imageAlt: '5',
      imageName:'Grow Green'
    },
    {
      imageSrc: 'https://preview.colorlib.com/theme/glint/images/portfolio/palmeira.jpg.webp',
      imageAlt: '6',
      imageName:'Palmeira'
    }

  ]

}
