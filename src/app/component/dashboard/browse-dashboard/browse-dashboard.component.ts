import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import { Publication } from 'app/shared/models/publication.model';

@Component({
    selector: 'browse-dashboard',
    templateUrl: 'browse-dashboard.component.html',
    styleUrls:['browse-dashboard.component.scss']
})

export class BrowseDashboardComponent implements OnInit {
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