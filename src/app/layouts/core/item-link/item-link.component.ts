import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { MenuItem, ChildrenItem } from 'src/app/common/interfaces';
import { Router } from '@angular/router';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-item-link',
  templateUrl: './item-link.component.html',
  styleUrls: ['./item-link.component.scss']
})
export class ItemLinkComponent implements OnInit {
  expanded: boolean;
  @Input() depth: number;
  @Input() item: ChildrenItem;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

  constructor(public navService: NavService,
              public router: Router) {
               }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: ChildrenItem) {
      this.router.navigate([item.route]);
  }
}
