import { Component } from '@angular/core';
import { LoggedUser } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  userData: any;
  loggedUser: LoggedUser = {
    email: '',
    displayName: '',
    photoURL: '',
  };
  constructor(private authService: AuthService) {
    // Get user data
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.userData);
    this.getLoggedUserData(this.userData);
  }

  logOut() {
    this.authService.logOut();
  }

  getLoggedUserData(userData: any) {
    this.loggedUser.email = userData.email;
    this.loggedUser.displayName = userData.displayName;
    this.loggedUser.photoURL = userData.photoURL;
  }
}
