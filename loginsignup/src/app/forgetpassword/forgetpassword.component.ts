import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  forgetPasswordForm!: FormGroup
  regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
  constructor() { }

  onSubmit() {
    console.log(this.forgetPasswordForm);
    let userAll = localStorage.getItem('userArray')
    let parseuser = JSON.parse(userAll as string);

    parseuser = parseuser.map((user: any) => {
      if (user.email === this.forgetPasswordForm.value['email'] && user.username === this.forgetPasswordForm.value['username']) {
        user.password = this.forgetPasswordForm.value['newPassword']
        return user
      } else {
        return user
      }
    })
    // console.log(parseuser);

    localStorage.setItem('userArray', JSON.stringify(parseuser))
  }
  checkIfUsernameExist(control: FormControl) {
    let userExist = {
      user: true
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)

    let foundUser = parsedUser.find((user :any)=>{
       return user.username === control.value
    })
    
    
    if(foundUser){
      return null
    }
    else{
      return userExist
    }
  }

  checkIfEmailExist(control: FormControl) {
    let emailExist = {
      emailif: true
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)

    let foundUser = parsedUser.find((user:any)=>{   
      console.log(user.email);
      
        return user.email === control.value
    })
    if(foundUser){  
      return null
    }
    else{
      return emailExist
    }
  }

  ngOnInit(): void {
    this.forgetPasswordForm = new FormGroup({
      username: new FormControl(null, [Validators.required, this.checkIfUsernameExist]),
      email: new FormControl(null, [Validators.required, Validators.email, this.checkIfEmailExist]),
      newPassword: new FormControl(null, [Validators.required, Validators.pattern(this.regexPassword)])
    })
  }
}
