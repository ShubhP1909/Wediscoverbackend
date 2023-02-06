
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerURL = "http://localhost:4000/api/signup";
  private loginURL = "http://localhost:4000/api/login";
  constructor(private http: HttpClient, private route: Router) { }

  registerUser(user: FormGroup<any>) {
    return this.http.post<any>(this.registerURL, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this.loginURL, user)
  }

  loggedIn() {
    return !!localStorage.getItem("token")
  }

  getToken() {
    return localStorage.getItem("token")
  }

}
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// import { Subject } from 'rxjs';
// import { AuthData } from './auth-Data.modal';
// import { User } from './user.modal';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   authChange = new Subject<boolean>();
//   private user!: User | null;
//   constructor(private router: Router) { }

//   registerUser(authData: AuthData) {
//     this.user = {
//       email: authData.email,
//       userId: authData.password
//       // userId: Math.round(Math.random() * 10000).toString()
//     };
//     this.authSuccessfully();
//   }

//   login(authData: AuthData) {
//     this.user = {
//       email: authData.email,
//       userId: authData.password
//       // userId: Math.round(Math.random() * 10000).toString()
//     };
//     this.authSuccessfully();
//   }

//   logout() {
//     this.user = null;
//     this.authChange.next(false);
//     this.router.navigate(['/']);
//   }

//   getUser() {
//     return { ...this.user };
//   }

//   isAuth() {
//     return this.user != null;
//   }

//   private authSuccessfully() {
//     this.authChange.next(true);
//     this.router.navigate(['/WeMeet']);
//   }
// }
