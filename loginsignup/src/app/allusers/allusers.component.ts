import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  
  allusers !: any 

  constructor(private dataservice : Dataservice){

  }

  ngOnInit(): void {
    this.allusers = this.dataservice.fetchData()
  }

  deleteUser(name : any){
    let userArray = this.dataservice.fetchData()
    console.log(name);
    console.log(userArray);
    userArray = userArray.filter((user : any)=>{
      return user.username !== name
    })

    console.log(userArray);

  }
}
