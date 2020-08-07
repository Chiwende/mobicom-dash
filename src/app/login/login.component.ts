import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  isSpinning = false;

  validateForm!: FormGroup;
  

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  // signup() {
  //   this.authService.signup(this.email, this.password);
  //   this.email = ''; this.password = '';
  // }

  login() {
    this.authService.login(this.email, this.password);
    // this.email =''; this.password = '';
    this.isSpinning = true;
    // this.router.navigateByUrl('dashboard'); 

  }

  logout() {
    this.authService.logout();
  }

}
