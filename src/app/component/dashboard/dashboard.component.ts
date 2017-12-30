import { Component ,OnDestroy} from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
import * as $ from 'jquery';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy{
  ngOnDestroy(): void {
    /*clean body from unnecessary theme styles*/
   $('body').removeAttr('class');
   $('body').removeAttr('style');
  }

  menu = MENU_ITEMS;
}