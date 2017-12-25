import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductComponent implements OnInit {
  imgUrl:string;
  constructor() {
    this.imgUrl="";
   }

  ngOnInit() {
  }

}
