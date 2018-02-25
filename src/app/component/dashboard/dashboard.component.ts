import { Component ,OnDestroy, OnInit} from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
import * as $ from 'jquery';
import { NbSidebarService, NbThemeService,  NbMediaBreakpoint } from '@nebular/theme';
import { StateService } from 'app/service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BreakpointSizes } from 'app/shared/models'
import { Breakpoints } from '@angular/cdk/layout/typings/breakpoints';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy{
  currentBreakpoint:NbMediaBreakpoint
  collapsed:boolean;
  sidebar: any = {};
  menu = MENU_ITEMS;

  constructor( 
    private sidebarService:NbSidebarService,
    private stateService:StateService,
    protected themeService: NbThemeService,
  ){}

  ngOnInit(): void {
    this.themeService
    .onMediaQueryChange()
    .subscribe(([bpFrom, bpTo]:  [NbMediaBreakpoint, NbMediaBreakpoint]) => {
      this.currentBreakpoint=bpTo;
    });
  }

  ngOnDestroy(): void {
    /*clean body from unnecessary theme styles*/
   $('body').removeAttr('class');
   $('body').removeAttr('style');
  }
  
  collapseSidebar(){
    if(this.currentBreakpoint.width<BreakpointSizes.md)
    this.sidebarService.collapse('menu-sidebar')
  }

}