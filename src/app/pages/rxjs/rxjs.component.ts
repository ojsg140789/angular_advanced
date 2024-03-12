import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, pipe, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnDestroy {

  intervalSubs!: Subscription;

  constructor() {
    // this.returnObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   value => console.log('subscribe', value),
    //   error => console.log('error', error),
    //   () => console.log( 'Obs final')
    // );
    this.intervalSubs = this.returnInterval()
      .subscribe( console.log );
  }

  returnInterval(): Observable<number> {
    return interval(500)
                        .pipe(
                          take(10),
                          map( value => { return value + 1; }),
                          filter( value => ( value % 2 === 0) ? true : false),
                        );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>( observer => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if( i === 4) {
          clearInterval( interval );
          observer.complete();
        }

        if( i === 2 ) {
          observer.error( 'i === 2' );
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
