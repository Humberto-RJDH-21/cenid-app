import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItems } from 'src/app/shared/menu-items';
import { NavService } from 'src/app/shared/services/nav.service';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/common/interfaces';

@Component({
  selector: 'app-item-nav',
  templateUrl: './item-nav.component.html',
  styleUrls: ['./item-nav.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class ItemNavComponent implements OnInit {
  expanded: boolean;
  menuItems: MenuItems;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: MenuItem;
  @Input() depth: number;
  newDepth: number;

  constructor(public navService: NavService,
              public router: Router) {
                if (this.depth === undefined) {
                  this.depth = 0;
                  console.log('depth: ', this.depth);
                }
                this.newDepth = this.depth + 1;
  }

  ngOnInit() {
    console.log('depth bf: ', this.depth);
    if (this.depth === undefined) {
      this.depth = 0;
      console.log('depth: ', this.newDepth);
    }
    // this.newDepth=this.newDepth;
    console.log('depth in: ', this.depth, 'new: ', this.newDepth);
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: MenuItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
