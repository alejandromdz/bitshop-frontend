import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductComponent implements OnInit {
  imgUrl:string;
  @Input() publication:Publication
  constructor() {
    this.imgUrl="";
   }

  ngOnInit() {
  }

}
