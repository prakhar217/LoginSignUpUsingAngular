import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dataservice } from '../data.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  updateForm !: FormGroup
  userArray !: any
  @Input() userId: any

  @Output() newArrayEmit = new EventEmitter<any>();

  constructor(private dataservice: Dataservice) { }



  ngOnInit(): void {
    console.log(this.userId);

    this.userArray = this.dataservice.fetchData2()
    this.updateForm = new FormGroup({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null, [Validators.required , Validators.email]),
      address: new FormControl(null,Validators.required),
      contact: new FormControl(null,[Validators.required]),
      role: new FormControl(null,Validators.required)
    })


  }


  onSubmit() {
    let newArray = []
    newArray = this.userArray.map((user: any) => {
      if(user.id === this.userId+1){
        return user.username = this.updateForm.controls['username'].value
      }
    })

    
    console.log(this.userArray);
    console.log(this.updateForm);
    console.log(this.userId);
    console.log(newArray);
    this.newArrayEmit.emit(this.userArray)
  }

}
