import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from 'src/app/shared/menu-items';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: []
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  initDepth: number;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.initDepth = 0;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
