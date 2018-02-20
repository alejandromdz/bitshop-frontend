import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Publication } from 'app/shared/models/publication.model';

@Component({
    selector: 'buy-dialog',
    templateUrl: './buyDialog.component.html',
  })
export class BuyDialogComponent {
  
    constructor(
      public dialogRef: MatDialogRef<BuyDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any) { }
  
      
    onNoClick(): void {
      console.log(this.data)
      this.dialogRef.close();
    }
  
  }