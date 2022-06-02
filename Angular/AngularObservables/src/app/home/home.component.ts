import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(
    //   (i) => {
    //     console.log(i);
    //   }
    // )
    const customIntervalObservable = new Observable((observer: Observer<number>) => {
      let count = 0
      setInterval(() => {
        observer.next(count);
        if(count === 5) {
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error('Count is Greater than 3 !'))
        }
        count++;
      }, 1000)
  });



    this.firstObsSubscription =   customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }), map((data: number) => {
      return 'Round:' + (data + 1)
    })).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message)
    }, () => {
      console.log('Completed');

    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
