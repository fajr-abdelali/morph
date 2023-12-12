import { Component } from '@angular/core';

@Component({
  selector: 'app-morph',
  templateUrl: './morph.component.html',
  styleUrls: ['./morph.component.scss']
})
export class MorphComponent {

  imagePath?: string;

  constructor() {
    this.setRandomImage();
  }

  setRandomImage() {
    const imagePaths = [
      '../../../assets/morph_products/i1.png',
     '../../../assets/morph_products/i2.png',
     '../../../assets/morph_products/o1.png',
     '../../../assets/morph_products/o2.png',
     '../../../assets/morph_products/o3.png',
     '../../../assets/morph_products/other1.png',
     '../../../assets/morph_products/other2.png',
     '../../../assets/morph_products/other3.png',
    ];
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    this.imagePath = imagePaths[randomIndex];
  }

}
