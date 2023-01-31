import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    constructor(private dataservice : Dataservice){}
  
    

    ngOnInit(): void {
      console.log(this.userId);

      this.userArray = this.dataservice.fetchData2()
      this.updateForm = new FormGroup({
        username : new FormControl(null),
        email : new FormControl(null),
        address : new FormControl(null),
        contact : new FormControl(null),
        role : new FormControl(null)
      })
      
      
    }

    onSubmit(){
      console.log(this.updateForm);
      console.log(this.userId);
    }

}
