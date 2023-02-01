import { Component, EventEmitter, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Dataservice } from '../data.service';

@Component({
  selector: 'app-userpagination',
  templateUrl: './userpagination.component.html',
  styleUrls: ['./userpagination.component.css']
})
export class UserpaginationComponent implements OnInit {
  
  allUser !: any 
  userToUpdate !: any
  display = false
  constructor(private dataservice : Dataservice){}
  
  ngOnInit(): void {
    this.allUser = this.dataservice.fetchData2();
    
  }

  onUpdateClick(index : any){
    this.userToUpdate = index
    this.display = !this.display
  }

  onDeleteClick(index : any){
  const cnf =  confirm('You want to delete')
  if(cnf){
    this.allUser =  this.allUser.slice(0,index).concat(this.allUser.slice(index+1))
  }
  else{
    alert('You said no')
  }
    
  }
  updateArray(event : Event){
    console.log(event);
  }
}
