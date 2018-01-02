import { Component, OnInit } from '@angular/core';
import { UserService, AuthService, ApiService, ConfigService } from 'app/service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatChipList,MatChip} from '@angular/material'
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  returnUrl:string;
  BTC_USD:number;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private config: ConfigService,
    private sidebarService:NbSidebarService
  ) { }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.apiService.get(this.config.BTC_USD_API_url,null,{wihCredentials:false}).subscribe((json:any)=>{
      if(json.USD&&json.USD.buy)
      this.BTC_USD=json.USD.buy;
    
    })
  }

  loggedIn():boolean{
    return this.userService.loggedIn();
  }

  logOut():void{
    this.authService.logout().subscribe(()=>{
      this.router.navigate([this.returnUrl]);
    });
  }

  toggleSidebar(){
    this.sidebarService.toggle(true, 'menu-sidebar');
  }

}
