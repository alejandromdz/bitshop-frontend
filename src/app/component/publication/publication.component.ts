import { Component, OnInit, Input, Inject } from '@angular/core';
import { Publication } from 'app/shared/models/publication.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { BuyDialogComponent } from 'app/component/publication/buyDialog.component';


@Component({
  selector: 'publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  imgUrl:string;
  @Input() publication:Publication
  constructor(private dialog: MatDialog) {
    this.imgUrl="";
   }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(BuyDialogComponent, {
      width: '250px',
      data: {
        publication:this.publication
       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}

