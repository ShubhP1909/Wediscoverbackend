import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from 'src/app/Auth/signup/signup.component';
import { LoginComponent } from 'src/app/Auth/login/login.component';
import { AuthService } from 'src/app/Auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // isAuth: boolean = false;
  // authSubscription!: Subscription;

  // @ViewChild('loginButton')
  // loginButton!: ElementRef<HTMLElement>;

  // @ViewChild('SignUpButton')
  // SignUpButton!: ElementRef<HTMLElement>;

  constructor(private modalService: NgbModal, public authService: AuthService, private route: Router) { }
  ngOnInit(): void {
    // this.authSubscription = this.authService.authChange.subscribe(authStatus => {
    //   this.isAuth = authStatus;
    // })
  }

  openLogin() {
    this.modalService.dismissAll();
    this.modalService.open(LoginComponent, { centered: true })
  }

  openSignUp() {
    this.modalService.dismissAll();
    this.modalService.open(SignupComponent, { centered: true })
  }


  LogoutUser() {
    localStorage.removeItem("token")
    this.route.navigate([''])
    this.modalService.open(LoginComponent, { centered: true })
  }

  // logOut() {
  //   this.authService.logout();
  // }

  // ngOnDestroy(): void {
  //   this.authSubscription.unsubscribe();
  // }

}
