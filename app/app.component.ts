import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log({ window, gtag });
        (<any>window).gtag('set', 'page', event.urlAfterRedirects);
        (<any>window).gtag('send', 'pageview');
      }
    });
  }
}
