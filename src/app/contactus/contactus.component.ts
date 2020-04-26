import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactusForm : FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.contactusForm = this.fb.group({
      'fstName' : [null, Validators.required],
      'lstName' : [null, Validators.required],
      'email' : [null, [Validators.email, Validators.required]],
      'messg' : [null, Validators.required]
    });
  }

  submit(formData : NgForm){
    console.log(formData);
  }
}
