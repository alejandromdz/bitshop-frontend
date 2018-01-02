import { Component, OnInit, Input } from '@angular/core';
import { Publication } from 'app/shared/models/publication.model';


@Component({
  selector: 'publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  imgUrl:string;
  @Input() publication:Publication
  constructor() {
    this.imgUrl="";
   }

  ngOnInit() {
  }

}
