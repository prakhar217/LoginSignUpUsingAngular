import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  
  forgetPasswordForm!:FormGroup
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
  constructor() { }

  onSubmit(){
    console.log(this.forgetPasswordForm);
    
  }
  checkIfUsernameExist(control: FormControl) {
    let userExist = {
      user: false
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)
    parsedUser.forEach((user: any) => {
      if (user.username === control.value) {
        return userExist['user'] = true
      } else {
        return null;
      }
    });
    return userExist['user'] ? userExist : null
  }

  checkIfEmailExist(control: FormControl) {
    let emailExist = {
      emailif: false
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)

     parsedUser.forEach((user: any) => {
      if (user.email === control.value) {
        return emailExist['emailif'] = true
      } else {
        return null
      }
    });
    return emailExist['emailif'] ? emailExist : null
  }

  ngOnInit(): void {
    this.forgetPasswordForm = new FormGroup({
      username : new FormControl(null,[Validators.required,this.checkIfUsernameExist]),
      email : new FormControl(null,[Validators.required,Validators.email,this.checkIfEmailExist]),
      newPassword : new FormControl(null,[Validators.required,Validators.pattern(this.regexPassword)])      
    })
  }
}
