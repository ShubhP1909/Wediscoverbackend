import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/Auth/auth.service';
import { SignupComponent } from 'src/app/Auth/signup/signup.component';


@Component({
  selector: 'app-discover-tab',
  templateUrl: './discover-tab.component.html',
  styleUrls: ['./discover-tab.component.css']
})
export class DiscoverTabComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal, private service: AuthService) { }

  ngOnInit(): void {
  }

  openWemeet() {
    if (this.service.loggedIn()) {
      this.router.navigate(["/WeMeet"])
    }
    else {
      this.modalService.open(SignupComponent, { centered: true })
    }
  }

  openWeIntro() {
    if (this.service.loggedIn()) {
      this.router.navigate(["/WeIntro"])
    }
    else {
      this.modalService.open(SignupComponent, { centered: true })
    }
  }

  openWeShop() {
    if (this.service.loggedIn()) {
      this.router.navigate(["/WeShop"])
    }
    else {
      this.modalService.open(SignupComponent, { centered: true })
    }
  }

  openWeGrow() {
    if (this.service.loggedIn()) {
      this.router.navigate(["/WeGrow"])
    }
    else {
      this.modalService.open(SignupComponent, { centered: true })
    }
  }
}
