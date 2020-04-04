import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { passwordValidator } from '../../core/password-validator';
import { emailValidator } from '../../core/email-validator';
import { SignupService } from 'src/app/shared/services/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
      email : ['', [Validators.required, emailValidator]],
      password : ['', [Validators.required, passwordValidator]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      roles: ['user']
  });

  constructor(private fb: FormBuilder, public signupService: SignupService) {}

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.signupService.postUsers(this.registerForm.value).subscribe(result => result);
}
}
