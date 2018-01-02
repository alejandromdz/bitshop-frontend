import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import { Publication } from 'app/shared/models/publication.model';
import { DisplayMessage } from 'app/shared/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'newpublication-dashboard',
    templateUrl: 'newpublication-dashboard.component.html',
    styleUrls: ['newpublication-dashboard.component.scss']
})
export class NewpublicationDashboardComponent implements OnInit {
    returnUrl: string;
    notification: DisplayMessage;
    submitted: boolean = false;
    publication: Publication = { description: '', photos: [], product: { name: '' }, title: '', }
    constructor(
        private apiService: ApiService,
        private cfg: ConfigService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }
    handleFileUploaded(locationURL: string) {
        this.publication.photos.push({ url: locationURL })
    }

    remove(image) {
        this.publication.photos.splice(this.publication.photos.indexOf(image), 1);
    }

    savePublication() {
        this.notification = undefined;
        this.submitted = true;
        this.apiService
            .post(this.cfg.publications_url, this.publication)
            .subscribe(
            data => {

                this.router.navigate([this.returnUrl]);
            },
            e => {
                this.submitted = false;
                this.notification = { msgType: 'error', msgBody: 'An error occurred, please try again.' };
            });
    }
}