import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { passwordValidator } from '../password-validator';
import { emailValidator } from '../email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = this.fb.group({
    username : ['', [ Validators.required, Validators.minLength(4)]],
    credentials: this.fb.group({
      email : ['', [Validators.required, emailValidator]],
      password : ['', [Validators.required, passwordValidator]],
    }),
    address: this.fb.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipcode: ['', [Validators.required]]
    })
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
