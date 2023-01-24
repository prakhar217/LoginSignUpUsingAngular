import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm !: FormGroup
  userArray: string[] = []
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

  oldArray = localStorage.getItem('userArray');
  parsedArray = JSON.parse(this.oldArray as string)
  checkIfUsernameExist(control: FormControl) {
    let userExist = {
      user: false
    }
    if(localStorage.length !== 0){
      let oldUser = localStorage.getItem('userArray');
      let parsedUser = JSON.parse(oldUser as string)
      parsedUser.forEach((user: any) => {
        if (user.username === control.value) {
          return userExist['user'] = true
        } else {
          return null;
        }
      });
    }

    return userExist['user'] ? userExist : null
  }

  checkIfEmailExist(control: FormControl) {
    let emailExist = {
      emailif: false
    }
    console.log(localStorage.length  );
    
    if(localStorage.length !== 0){
      let oldUser = localStorage.getItem('userArray');
      let parsedUser = JSON.parse(oldUser as string)
  
       parsedUser.forEach((user: any) => {
        if (user.email === control.value) {
          return emailExist['emailif'] = true
        } else {
          return null
        }
      });
    }

    return emailExist['emailif'] ? emailExist : null
  }

  onSubmit() {
    

    if (this.signUpForm.valid) {
      if (JSON.parse(localStorage.getItem('userArray') as string) !== null) {
        this.parsedArray.push(this.signUpForm.value)
        localStorage.setItem('userArray', JSON.stringify(this.parsedArray))
      }
      else {
        this.userArray.push(this.signUpForm.value)
        localStorage.setItem('userArray', JSON.stringify(this.userArray))
      }
      location.href="http://localhost:4200/signin"
    } else {
      console.log('User Exists');
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(30), this.checkIfEmailExist]),
      username: new FormControl(null, [Validators.required, Validators.maxLength(20), this.checkIfUsernameExist]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.pattern(this.regexPassword)])
    })

    console.log(this.signUpForm);
    
  }
}
