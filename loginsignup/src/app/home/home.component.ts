import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser : string = ''

  constructor(private route : Router){}

  ngOnInit(){
    if(sessionStorage.length){
      let userObj = JSON.parse(sessionStorage.getItem('activeUser') as any) 
     
      this.loggedInUser = userObj.username
    }


  }

  onLogOut(){

    sessionStorage.clear()
    this.route.navigateByUrl('/signin')
  }
  
} 
