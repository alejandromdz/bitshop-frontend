import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import { Publication } from 'app/shared/models/publication.model';



@Component({
    selector: 'search-main',
    templateUrl: 'search-main.component.html',
    styleUrls:['search-main.component.scss']
})
export class SearchMain implements OnInit {
    isToggled:boolean=false;
    publications:Publication[]=[];
    searchString:string;
    constructor(
        private apiService: ApiService,
        private config: ConfigService,
    ) { }

    ngOnInit() { 
        this.apiService
            .get(this.config.publications_url)
            .subscribe((response:Publication[])=>{
                this.publications=response||[];
            })
    }

    doSearch():void{
        
        if(this.isToggled&&this.searchString){
            this.apiService
            .get(`${this.config.publications_url}?search=${this.searchString}`)
            .subscribe((response:Publication[])=>{
                this.publications=response||[];
            })
        }
        this.isToggled=!this.isToggled;
    }
}