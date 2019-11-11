import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Multimedia } from '../multimedia';
import { ImageService } from '../image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-upload-foto',
  templateUrl: './upload-foto.component.html',
  styleUrls: ['./upload-foto.component.css']
})
export class UploadFotoComponent implements OnInit {

  selectedFile: ImageSnippet;

  constructor(public dialogRef: MatDialogRef<UploadFotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Multimedia,
    private imageService: ImageService) {}

    processImage(imageInput: any) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();
  
      reader.addEventListener('load', (event: any) => {
  
        this.selectedFile = new ImageSnippet(event.target.result, file);
  
        this.imageService.uploadImage(this.selectedFile.file, '').subscribe(
          (res) => {
          
          },
          (err) => {
          
          })
      });
  
      reader.readAsDataURL(file);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit()
  {

  }
}

  
