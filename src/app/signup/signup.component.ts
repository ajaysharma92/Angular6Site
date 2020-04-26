import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private auth : AuthenticationService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'fstName' : [null, Validators.required],
      'lstName' : [null, Validators.required],
      'email' : [null, [Validators.email, Validators.required]],
      'password' : [null, Validators.required]
    });
  }

  signup(formData : NgForm){
    return this.auth.signup(formData).subscribe(
      (user) => console.log(user));
  }

}
