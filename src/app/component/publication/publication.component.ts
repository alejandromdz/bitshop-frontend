import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from 'app/shared/models/publication.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { BuyDialogComponent } from 'app/component/publication/buyDialog.component';
import { UserService } from '../../service';


@Component({
  selector: 'publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  imgUrl:string;
  @Input() publication:Publication
  constructor(private dialog: MatDialog,
    private userService:UserService,
    private router:Router) {
    this.imgUrl="";
   }

  ngOnInit() {
  }

  openDialog(): void {

    if(this.userService.loggedIn()){
  
      let dialogRef = this.dialog.open(BuyDialogComponent, {
        width: '250px',
        data: {
          publication:this.publication
        }
      });

    
      dialogRef.afterClosed().subscribe(result => {
       
    });
  }
  else{
      this.router.navigate(['/login'])
  }

}

}
