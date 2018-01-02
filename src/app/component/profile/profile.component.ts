import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import { User } from 'app/shared/models';


@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User={firstname:'', lastname:'',username:'',email:''};
  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.apiService
      .get(this.config.whoami_url)
      .subscribe(
      data => {
        if (this.user.username!==undefined) {
          this.user = data;
        }
      },
      e => { })
  }
}
