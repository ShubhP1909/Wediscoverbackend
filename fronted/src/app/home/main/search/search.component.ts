import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/Auth/login/login.component';
import { SignupComponent } from 'src/app/Auth/signup/signup.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {
  }

  openLogin() {
    this.modalService.open(LoginComponent, { centered: true })
  }

  openSignUp() {
    this.modalService.open(SignupComponent, { centered: true })
  }

}

