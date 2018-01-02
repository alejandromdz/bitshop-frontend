import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import { Publication } from 'app/shared/models/publication.model';

@Component({
    selector: 'mypublications-dashboard',
    templateUrl: 'mypublications-dashboard.component.html',
    styleUrls:['mypublications-dashboard.component.scss']
})

export class MypublicationsDashboardComponent implements OnInit {
    publications:Publication[]=[];
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

}