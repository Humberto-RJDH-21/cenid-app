import { NgModule } from '@angular/core';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { MenuItems } from './menu-items';
import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
   ],
  providers: [
    MenuItems,
    AuthService    
  ]
})
export class SharedModule { }
