import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeColorDirective } from '../change-color.directive';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(ChangeColorDirective) changeColor : ChangeColorDirective;

  loginForm : FormGroup;
  returnUrl : string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private auth : AuthenticationService, private router : Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      //'email' : ["vijay.kum@gmail.com", [Validators.email, Validators.required]],
      'email' : [null, [Validators.email, Validators.required]],
      'password' : ["12345", Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(formData : NgForm){
    return this.auth.login(formData).subscribe(
      (user) => {
        if(user.id !== '')
          //console.log(user);
          this.router.navigate([this.returnUrl]);
          //console.log(user.id);
        else
        alert('Login details entered incorrect');
      });
  }
}
