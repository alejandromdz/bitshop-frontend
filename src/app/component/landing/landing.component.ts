import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  redirectUrl: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.redirectUrl = this.route.snapshot.queryParams['redirect'];
    if(this.redirectUrl){
      this.router.navigate([this.redirectUrl]);
    }
  }

}
