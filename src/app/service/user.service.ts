import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {

  currentUser=null;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  initUser() {
    return  this.apiService
                .get(this.config.refresh_token_url)
                .toPromise()
                .then(res => {
                  if (res.access_token !== null) {
                    return  this.getMyInfo()
                                .toPromise()
                                .then(user => {
                                  this.currentUser = user;
                                });
                  }})
                .catch(() => null);
  }

  getMyInfo() {
    return  this.apiService
                .get(this.config.whoami_url)
                .map(user => this.currentUser = user);
  }

  getAll() {
    return  this.apiService
                .get(this.config.users_url);
  }

  loggedIn(): boolean {
    return this.currentUser!=null;
  }

}
