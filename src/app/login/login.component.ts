import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted =false;

  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  forgotpassword(){
    this.router.navigate(['/forgotpassword'])
  }
  login(){
    this.submitted=true;
    if(!this.loginForm.invalid)
    {
      this.router.navigate(['/quorapage'])
    }
  }


}


