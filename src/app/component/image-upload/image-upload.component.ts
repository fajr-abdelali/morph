import { Component, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  @Output() statusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  selectedImage: any = null;
  imageUrl: string = ''; 
  imageState: boolean = false;



  onFileSelected(event: any): void {
    this.imageState = false;
    const file: File = event.target.files[0];
    this.uploadAndDisplayImage(file);
  }


  uploadAndDisplayImage(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
      this.imageState = true;
      this.changeStatus();
    };

    reader.readAsDataURL(file);
  }

  changeStatus() {
    if (this.imageState) {
      this.statusChanged.emit(true);
    }
  }



}
