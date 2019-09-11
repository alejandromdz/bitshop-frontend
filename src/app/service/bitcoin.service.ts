import { Injectable, forwardRef, Inject} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ApiService, ConfigService } from ".";
import { Subject } from "rxjs";


@Injectable()
export class BictoinService{
    private apiService:ApiService;
    private config:ConfigService;
    private sub:Subject<any>=new Subject();
    constructor(
        @Inject(forwardRef(()=>ApiService))apiService:ApiService,
        @Inject(forwardRef(()=>ConfigService))config:ConfigService){
            this.apiService=apiService;
            this.config=config;
    }
    get BTC_USD(): Observable<any> {
      this.apiService
      .get(this.config.BTC_USD_API_url,null,{wihCredentials:false})
      .subscribe((json:any)=>{
        if(json.USD&&json.USD.buy)
        {
            this.sub.next({
                BTC_USD:json.USD.buy
            })
        }
      });
      return this.sub;
    }
}