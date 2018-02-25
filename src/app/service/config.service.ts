import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  private _api_url = '/api'
  private _refresh_token_url = this._api_url + '/refresh';
  private _login_url = this._api_url + '/login';
  private _logout_url = this._api_url + '/logout';
  private _signup_url = this._api_url + '/signup';
  private _change_password_url = this._api_url + '/changePassword';
  private _self_url = this._api_url + '/self';
  private _users_url = this._api_url + '/user';
  private _publications_url=this._api_url+'/publication';
  private _self_publications_url=this.self_url+"/publication";
  private _BTC_USD_API_url='https://blockchain.info/ticker?cors=true';
  private _BTC_address_service='https://n03u3txun2.execute-api.us-west-1.amazonaws.com/v1/';



  get refresh_token_url(): string {
      return this._refresh_token_url;
  }

  get self_url(): string {
      return this._self_url;
  }

  get users_url(): string {
      return this._users_url;
  }

  get login_url(): string {
      return this._login_url;
  }

  get logout_url(): string {
      return this._logout_url;
  }

  get change_password_url(): string {
      return this._change_password_url;
  }

  get publications_url():string{
      return this._publications_url;
  }

  get BTC_USD_API_url():string{
      return this._BTC_USD_API_url;
  }

  get signup_url():string{
      return this._signup_url;
  }

  get self_publications_url():string{
      return this._self_publications_url;
  }

  get BTC_address_service():string{
      return this._BTC_address_service;
  }
}
