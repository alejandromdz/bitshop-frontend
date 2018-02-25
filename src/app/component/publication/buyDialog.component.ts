import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Publication } from 'app/shared/models/publication.model';
import { ApiService, UserService } from '../../service';
import { ConfigService } from 'app/service/config.service';

@Component({
    selector: 'buy-dialog',
    templateUrl: './buyDialog.component.html',
    styleUrls:['./buyDialog.component.scss']
  })
export class BuyDialogComponent implements OnInit{
  
    private bitcoin_address:String
    private loaded:boolean=false;

    constructor(
      private dialogRef: MatDialogRef<BuyDialogComponent>,
      private apiService: ApiService,
      private config: ConfigService,
      private userService:UserService,
      @Inject(MAT_DIALOG_DATA) public data:any) { }
      
    onNoClick(): void {
      this.dialogRef.close();
    }
    ngOnInit(): void {
      const amount:number=0.01;
      const address:string='1NpWBCdKbCmEz1UBVjmqVnQhvv61ssfWnD'
      const label:string='Luke-Jr';
      const message:string='Donation%20for%20project%20xyz';
      const publicationId:number=1;
      const senderId:number=this.userService.currentUser.id;
      console.log(this.userService.currentUser)
    
      this.apiService
      .get(`${this.config.BTC_address_service}publication/${publicationId}/sender/${senderId}`,null,{withCredentials:false})
      .subscribe(data=>{
        this.bitcoin_address=`bitcoin:${data.address}?amount=${amount}&label=${label}&message=${message}`;
        this.loaded=true;
      })
    }
  
  }