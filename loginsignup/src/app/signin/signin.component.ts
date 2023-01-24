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
      user: true
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)
    parsedUser.forEach((user: any) => {
      console.log(control.value);
      
      if (user.username === control.value) {
        console.log(user.username);
        
        return null
      } else {
        return userExist['user'] = false;
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
        return null
      } else {
        return passwordExist['pass'] = true;
      }
    });
    return passwordExist['pass'] ? null : passwordExist
  }

  onSubmit(){
    console.log(this.signInForm.valid);
    if(this.signInForm.valid){
      location.href = 'https://www.digivalet.com/'
    }
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      username: new FormControl(null,[Validators.required,this.checkIfUsernameExist]),
      password: new FormControl(null,[Validators.required,this.checkIfPasswordMatch])
    })
  }
}
