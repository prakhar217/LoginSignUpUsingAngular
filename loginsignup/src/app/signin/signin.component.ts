import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  signInForm !:FormGroup

  constructor(private router : Router){}
  checkIfUsernameExist(control: FormControl) {
    let userExist = {
      user: true
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)

    let foundUser = parsedUser.find((user : any)=>{
      return user.username === control.value
    })

    if(foundUser){
      return null
    }else{
      return userExist
    }

  }

  checkIfPasswordMatch(control : FormControl){
    let passwordExist = {
      pass: true
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)

    let foundUser = parsedUser.find((user:any)=>{
      return user.password === control.value
    })

    if(foundUser){
      return null
    }
    else{
      return passwordExist
    }
  }

  onSubmit(signInRef : HTMLElement){
    console.log(signInRef);
    
    console.log(this.signInForm.valid);
    console.log(this.signInForm);
    let obj = {
      username : this.signInForm.controls['username'].value
    }

    if(this.signInForm.valid){
      sessionStorage.setItem('activeUser',JSON.stringify(obj))
      this.router.navigateByUrl('/home')
    }
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null,[Validators.required,this.checkIfUsernameExist]),
      password: new FormControl(null,[Validators.required,this.checkIfPasswordMatch])
    })
  }
}
