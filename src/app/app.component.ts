import { Component, ViewChild } from '@angular/core';
import { ImageUploadComponent } from './component/image-upload/image-upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'morph';
  drag: boolean = true;
  morph: boolean = false;


  @ViewChild('firstImage') firstImage?: ImageUploadComponent;
  @ViewChild('secondImage') secondImage?: ImageUploadComponent;

  onDragEnded(event: any) {
    this.morph = true;
    this.drag = false;
  }

}
