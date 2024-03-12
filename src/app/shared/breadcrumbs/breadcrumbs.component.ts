import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})

export class BreadcrumbsComponent implements OnDestroy {

  title: String = '';
  titleSubs$: Subscription;

  constructor( private router: Router) {
    this.titleSubs$ =  this.getTitle()
                          .subscribe( (data: any) => {
                            this.title = data.title;
                            document.title = data.title;
                          });
  }

  getTitle() {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
        map((event:ActivationEnd) => event.snapshot.data)
      );
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }
}
