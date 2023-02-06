import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addloginform!: FormGroup;

  constructor(private fb: FormBuilder, private modalService: NgbModal, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {

    this.addloginform = this.fb.group({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }

  addData() {
    // console.log(this.addloginform.value);
    // localStorage.setItem("user", JSON.stringify(this.addloginform.value))
    // this.addloginform.reset()

    //   this.authService.login({
    //     email: this.addloginform.value.email,
    //     password: this.addloginform.value.password
    //   });
    //   this.modalService.dismissAll();
    // }

    // closeModal() {
    //   this.modalService.dismissAll();
    // }
    this.authService.loginUser(this.addloginform.value).subscribe({
      next: (res) => {
        console.log(res)
        localStorage.setItem("token", res.token)
        this.route.navigate(["/"])
      },
      error: err => console.log(err)
    })
    this.modalService.dismissAll();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

}
