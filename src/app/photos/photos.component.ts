import { Component,HostListener,Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions} from 'swiper';
interface Item{
  imageSrc:string;
  imageAlt:string;
}
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  swiperConfig3: any= {
    slidesPerGroup:1,
    loop:true,
    
    breakpoints:{
      500:{
        Navigation: false, 
      },
      0:{
        Navigation:false,
      }
    }
  }
@Input() galleryData: Item[] = [];
@Input() showCount = false
btn1 = document.getElementsByClassName("swiper-button-next")
btn2 = document.getElementsByClassName("swiper-button-prev")


public data:Array<any>=[
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
  constructor() { }
previewImage = false;
showMask = false
currentLightboxImage: Item = this.data[0]
currentIndex:number = 0 
controls=true
totalImageCount= 0
  ngOnInit(): void {
    this.totalImageCount = this.data.length
    console.log(this.data[0].imageSrc)


  }

onPerviewImage(index: number): void {
  this.showMask=true
  this.previewImage = true
  this.currentIndex = index
  this.currentLightboxImage= this.data[index]
  console.log(this.showMask)
  console.log(this.previewImage)
  console.log(this.currentIndex)
  console.log(this.currentLightboxImage)

  
  
}
@HostListener('click', ['$event.target'])
onClick1(btn1: any) {
  console.log('button', btn1,  );
  this.currentIndex =this.currentIndex+1
  console.log(this.currentIndex+1)
  if(this.currentIndex>this.totalImageCount){
    this.currentIndex=1
  }

}

onClick2(btn2: any) {
  console.log('button', btn2,  );
  this.currentIndex =this.currentIndex-1
  console.log(this.currentIndex-1)

}
}
