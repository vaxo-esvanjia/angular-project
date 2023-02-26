import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-weareglint',
  templateUrl: './weareglint.component.html',
  styleUrls: ['./weareglint.component.css']
})
export class WeareglintComponent implements OnInit {
  faCoffee = faCoffee;
  constructor() { }
  
  countawards:number = 0
  countawardsstop:any = setInterval(()=>{
    this.countawards++
    
    if(this.countawards==127){
      clearInterval(this.countawardsstop)
      
    }
    
  },78)
  coffecount:number=0
  
  coffecountstop:any = setInterval(()=>{
    this.coffecount++
    
    if(this.coffecount==1505){
      clearInterval(this.coffecountstop)
      
    }
    
  },1)

  projects:number = 0
  projectsstop:any = setInterval(()=>{
    this.projects++
    
    if(this.projects==109){
      clearInterval(this.projectsstop)
      
    }
    
  },90)
  happyclients:number = 0
  happyclientsstop:any = setInterval(()=>{
    this.happyclients++
    
    if(this.happyclients==102){
      clearInterval(this.happyclientsstop)
      
    }
    
  },80)

  ngOnInit(): void {

  }

}
