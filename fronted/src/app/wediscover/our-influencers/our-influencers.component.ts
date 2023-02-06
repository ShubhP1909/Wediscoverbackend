import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/Auth/auth.service';
import { SignupComponent } from 'src/app/Auth/signup/signup.component';

@Component({
  selector: 'app-our-influencers',
  templateUrl: './our-influencers.component.html',
  styleUrls: ['./our-influencers.component.css']
})
export class OurInfluencersComponent implements OnInit {
  images: any;

  constructor(private modalService: NgbModal, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.images = [
      {
        img1: "../../../../assets/images/top_influencer_1.png",
      },
      {
        img1: "../../../../assets/images/top_influencer_2.png"
      },
      {
        img1: "../../../../assets/images/top_influencer_3.png"
      },
      {
        img1: "../../../../assets/images/top_influencer_4.png"
      },
      {
        img1: "../../../../assets/images/top_influencer_5.png"
      },
      {
        img1: "../../../../assets/images/top_influencer_6.png"
      }
    ]
  }

  openWeMeet() {
    if (this.service.loggedIn()) {
      this.router.navigate(['/WeMeet'])
    }
    else {
      this.modalService.open(SignupComponent, { centered: true })
    }
  }

}
