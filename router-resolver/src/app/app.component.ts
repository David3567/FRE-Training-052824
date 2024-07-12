import { AuthService, Role, User } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Routing Module: router-resolver';

  constructor(public authService: AuthService) {}

  switch(userRole: 'User' | 'Super' | 'Admin') {
    const nameList = ['Velen', 'Illidan', 'Muradin', 'Sylvanas'];
    const userName = nameList[Math.floor(Math.random() * nameList.length)];

    const user = new User(userName, Role[userRole], `${userName}@gmail.com`);

    this.authService.user = user;
    
  }
}
