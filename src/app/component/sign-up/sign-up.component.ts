import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { User, DisplayMessage } from 'app/shared/models';
import { ApiService, ConfigService } from 'app/service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'user-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  newUser:User={email:'',firstname:'',lastname:'',password:'',username:'',telephone:'',address:''};
  submitted = false;
  notification: DisplayMessage;
  returnUrl: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  
  constructor(
    private apiService:ApiService,
    private config:ConfigService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params
    .takeUntil(this.ngUnsubscribe)
    .subscribe((params: DisplayMessage) => {
      this.notification = params;
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  doSignUp() {
    this.notification = undefined;
    this.submitted = true;

    this.apiService
    .post(this.config.signup_url,this.newUser)
    .delay(1000)
    .subscribe(
      data=>{
        this.router.navigate([this.returnUrl]);
      },
      e=>{
        this.submitted = false;
        var message = "An error occurred, please try again later."
        if(e.error&&e.error.result)
        {
          message=e.error.result;
        }
        this.notification = { msgType: 'error', msgBody: message};
      })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
