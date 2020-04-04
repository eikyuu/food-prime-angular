import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { SignupService } from 'src/app/shared/services/signup.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { emailValidator } from 'src/app/core/email-validator';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private router: Router,
              private formbuilder: FormBuilder,
              private userService: UserService
              ) { }

  ngOnInit() {
    this.signInForm = this.formbuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]]
    });
  }

  userConnexion() {
    this.userService.connexion(this.signInForm.value).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  goToSignUp() {
    this.router.navigate(['/inscription']);
  }
}
