import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUser$: BehaviorSubject<User> = new BehaviorSubject(
    new User('Tom', Role.User, 'Tom@gmail.com')
  );

  set user(newUser: User) {
    console.log(newUser);
    this.currentUser$.next(newUser);
  }
  get user(): User {
    return this.currentUser$.value;
  }

  loading$ = new BehaviorSubject(false);

  constructor() {}
}

export enum Role {
  User = 'user',
  Super = 'super',
  Admin = 'admin',
}

export class User {
  constructor(public name: string, public role: Role, public email: string) {}
}
