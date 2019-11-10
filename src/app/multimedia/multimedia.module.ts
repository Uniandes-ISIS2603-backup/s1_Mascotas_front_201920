import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFotoComponent } from './upload-foto/upload-foto.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageService } from './image.service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ImageService
  ],
  declarations: [UploadFotoComponent]
})
export class MultimediaModule { }