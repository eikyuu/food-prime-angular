import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { passwordValidator } from '../../shared/password-validator';
import { emailValidator } from '../../shared/email-validator';

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
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
