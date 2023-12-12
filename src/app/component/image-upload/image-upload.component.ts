import { Component } from '@angular/core';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  selectedImage: any = null;
  imageUrl: string = ''; // Set this to the URL of the uploaded image
  imageState: boolean = false;


  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.uploadAndDisplayImage(file);
  }


  uploadAndDisplayImage(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
      this.imageState = true;
    };

    reader.readAsDataURL(file);
  }


}
