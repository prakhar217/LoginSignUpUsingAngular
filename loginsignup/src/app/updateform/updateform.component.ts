import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {
    
    updateForm !: FormGroup

    constructor(){}

    ngOnInit(): void {
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
    }

}
