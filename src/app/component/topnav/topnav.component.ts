import { Component, OnInit } from '@angular/core';
import { UserService, AuthService } from 'app/service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  returnUrl:string;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  
  }

  loggedIn():boolean{
    return this.userService.loggedIn();
  }

  logOut():void{
    this.authService.logout().subscribe(()=>{
      this.router.navigate([this.returnUrl]);
    });
  }

}
