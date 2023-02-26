import { Component, OnInit } from '@angular/core';
import { faDashcube   } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
faDashcube=faDashcube
  constructor() { }

  ngOnInit(): void {
  }

}
