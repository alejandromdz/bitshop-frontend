import {OnDestroy,OnInit, Component, Input, Output, EventEmitter} from '@angular/core';
import { S3UploadService } from 'app/service/S3upload.service';


@Component({
  selector: 's3-upload',
  templateUrl: './s3-upload.component.html',
  styleUrls:['./s3-upload.component.scss']
})

export class S3UploadComponent implements OnDestroy {
  
  @Output() fileUploaded = new EventEmitter();
  constructor(public s3Upload: S3UploadService) {
  }

  upload() {
    this.s3Upload.upload();
  }

  pauseUpload(index) {
  }

  removeUpload(index) {
  }

  onChange(event) {
   this.s3Upload.add(event.srcElement.files)
   .subscribe(
     (location)=>{
       //emit event to the outer element
      this.fileUploaded.emit(location);
      },
      (e)=>{
        //TODO, emit an error image url
      });
  }

  ngOnDestroy(): void {
    this.s3Upload.reset();
  
  }
}