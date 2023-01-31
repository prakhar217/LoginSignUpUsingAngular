import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Dataservice } from '../data.service';

@Component({
  selector: 'app-userpagination',
  templateUrl: './userpagination.component.html',
  styleUrls: ['./userpagination.component.css']
})
export class UserpaginationComponent implements OnInit {
  
  allUser !: any 
  // @ViewChild('dt') dt: Table | undefined;
  display = true
  constructor(private dataservice : Dataservice){}
  
  ngOnInit(): void {
    this.allUser = this.dataservice.fetchData2();
    
  }

  onUpdateClick(){
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
}
