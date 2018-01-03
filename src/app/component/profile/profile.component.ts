import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import { User, DisplayMessage } from 'app/shared/models';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  submitted = false;
  notification: DisplayMessage;
  returnUrl: string;
  user: User={firstname:'', lastname:'',username:'',email:''};

  constructor(
    private apiService: ApiService,
    private config: ConfigService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

    this.apiService
      .get(this.config.self_url)
      .subscribe(
      data => {
        if (this.user.username!==undefined) {
          this.user = data;
        }
      },
      e => { })
  }

  saveInfo():void{

    this.notification = undefined;
    this.submitted = true;

    this.apiService
      .put(this.config.self_url,this.user)
      .subscribe(
        data=>{

          this.submitted = false;
          this.notification = { msgType: 'success', msgBody: 'Your information was succesfully updated.' };
        },
        e=>{

        this.submitted = false;
        this.notification = { msgType: 'error', msgBody: 'An error occurred, please try again later.' };
        }
      );
  }
}
