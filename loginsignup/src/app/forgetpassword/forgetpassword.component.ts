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
      this.forgetPasswordForm.value['email']
      if (user.email === this.forgetPasswordForm.value['email'] && user.username === this.forgetPasswordForm.value['username']) {
        user.password = this.forgetPasswordForm.value['newPassword']
        return user
      } else {
        return user
      }
    })
    console.log(parseuser);

    localStorage.setItem('userArray', JSON.stringify(parseuser))
  }
  checkIfUsernameExist(control: FormControl) {
    let userExist = {
      user: false
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)
    parsedUser.forEach((user: any) => {
      if (user.username === control.value) {
        console.log('Hello');
        return null
      } else {
        return userExist['user'] = true;
      }
    });
    console.log(userExist['user']);
    
    return userExist['user'] ? userExist : null
  }

  checkIfEmailExist(control: FormControl) {
    let emailExist = {
      emailif: false
    }
    let oldUser = localStorage.getItem('userArray');
    let parsedUser = JSON.parse(oldUser as string)

    parsedUser.forEach((user: any) => {
      // console.log(user.email === control.value );
      
      if (user.email === control.value) {
        return null
      } else {
        return emailExist['emailif'] = true
      }
    });
    console.log(emailExist['emailif'] ? emailExist : null);
    
    return emailExist['emailif'] ? emailExist : null
  }

  ngOnInit(): void {
    this.forgetPasswordForm = new FormGroup({
      username: new FormControl(null, [Validators.required, this.checkIfUsernameExist]),
      email: new FormControl(null, [Validators.required, Validators.email, this.checkIfEmailExist]),
      newPassword: new FormControl(null, [Validators.required, Validators.pattern(this.regexPassword)])
    })
  }
}
