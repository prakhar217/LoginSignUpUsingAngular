import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  signInForm !:FormGroup

  constructor(){}
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

  checkIfPasswordMatch(control : FormControl){
    let passwordExist = {
      pass: false
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)
    parsedUser.forEach((user: any) => {
      if (user.password === control.value) {
        return passwordExist['pass'] = true
      } else {
        return null;
      }
    });
    return passwordExist['pass'] ? passwordExist : null
  }

  onSubmit(){
    console.log(this.signInForm);
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null,[Validators.required,this.checkIfUsernameExist]),
      password: new FormControl(null,[Validators.required,this.checkIfPasswordMatch])
    })
  }
}
