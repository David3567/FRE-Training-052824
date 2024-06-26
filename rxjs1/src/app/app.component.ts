import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { TodoService } from './service/todo.service';
import { Observable, Subscription, from, fromEvent, of, filter, throwError } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';

import { lookup } from 'dns';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  @ViewChild('inputBox', { static: true }) inputBox!: ElementRef;
  todos: any[] = [];
  typeValue!: string;

  subsription!: Subscription;

  srcArray = from([1, 2, 'A', 4]);
 
  obs = this.srcArray
    .pipe(
      map(val => {
        let result = val as number * 2;
        if (Number.isNaN(result)) {
          console.log('Errors Occurred in Stream')
          throw new Error("Result is NaN")
          }
          return result
        }),
      catchError(error => {
        console.log('Caught in CatchError. Returning 0')
        throw new Error(error);
        
        // return of(0);   //return from(['A','B','C'])
      } )
    );

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // const observer = {
    //   next: (x: number) => console.log('Observer got a next value: ' + x),
    //   error: (err: string) => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // };

    // const promise1 = new Promise((resolve, reject) => {
    //   console.log(123);
    //   setTimeout(() => {
    //     resolve('Hello from the promise!');
    //   }, 2000);
    // });

    // this.todoService.getTodos().subscribe();

    // this.subsription = of(1, 2, 3, 4).pipe(
    //   take(3),
    //   // filter(x => x > 3),
    //   map(x => x + 1),
    // )
    
    // .subscribe(value => console.log(value));

    // from(promise1).subscribe(x => console.log(x));

    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    //  observable.subscribe(x => console.log(x));

    // fromEvent(this.inputBox.nativeElement, 'keyup')
    //   .pipe(
    //     tap((value: any) => console.log(value)),
    //     map((event: any) => event.target.value)
    //   )
    //   .subscribe(value => this.typeValue = value);

    // this.obs.subscribe(
    //   el => {
    //     console.log("Value Received :" + el);
    //   },
    //   err => {
    //     console.log("Error caught at Subscriber :" + err);
    //   },
    //   () => console.log("Processing Complete")
    // );

    // this.todoService.subject$.subscribe(val => console.log(val));

    this.todoService.behaviorSubject$.next("1");
    this.todoService.behaviorSubject$.next("2");
    // this.todoService.subject$.complete();


    this.todoService.behaviorSubject$.subscribe(val => console.log('current' + val));

    // this.todoService.behaviorSubject$.next("3");
    // this.todoService.behaviorSubject$.next("4");
    // this.todoService.behaviorSubject$.complete();

  }

  ngOnDestroy() {
    // this.subsription.unsubscribe();
  }
}
