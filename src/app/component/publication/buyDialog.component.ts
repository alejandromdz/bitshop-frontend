import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Publication } from 'app/shared/models/publication.model';
import { ApiService, UserService, BictoinService } from '../../service';
import { ConfigService } from 'app/service/config.service';

@Component({
    selector: 'buy-dialog',
    templateUrl: './buyDialog.component.html',
    styleUrls:['./buyDialog.component.scss']
})
export class BuyDialogComponent implements OnInit{
  
    private bitcoinURI:String
    private bitcoin_address:String=''
    private loaded:boolean=false;
    private BTC_USD:number=Infinity;

    constructor(
      private dialogRef: MatDialogRef<BuyDialogComponent>,
      private apiService: ApiService,
      private bitcoinService:BictoinService,
      private config: ConfigService,
      private userService:UserService,
      @Inject(MAT_DIALOG_DATA) public data:any) { }
      
    onNoClick(): void {
      this.dialogRef.close();
    }
    ngOnInit(): void {
      
      const label:string=this.data.publication.title;
      const message:string='Your buy in bitshops';
      const price:number=this.data.publication.price;
      const publicationId:number=this.data.publication.id;
      const senderId:number=this.userService.currentUser.id;
    

      this.bitcoinService.BTC_USD
      .subscribe((data)=>{
        this.BTC_USD=data.BTC_USD;
        this.bitcoinURI=`bitcoin:${this.bitcoin_address}?amount=${price/this.BTC_USD}&label=${label}&message=${message}`;
      })

      this.apiService
      .get(`${this.config.BTC_address_service}publication/${publicationId}/sender/${senderId}`,null,{withCredentials:false})
      .subscribe(data=>{
        this.bitcoin_address=data.address
        this.bitcoinURI=`bitcoin:${this.bitcoin_address}?amount=${price/this.BTC_USD}&label=${label}&message=${message}`;
        this.loaded=true;
      })

 

    }
  
  }