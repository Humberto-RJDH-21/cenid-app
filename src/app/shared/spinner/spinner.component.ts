import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styles: []
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;

  @Input()
  public backgroundColor = 'rgba(0, 115, 170, 0.69)';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.isSpinnerVisible = false;
        }
      },
      () => {
        this.isSpinnerVisible = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }
}
