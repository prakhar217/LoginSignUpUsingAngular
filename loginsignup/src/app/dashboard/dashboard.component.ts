import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {

  visibleSidebar1 !: boolean 
  items!: any[];
  loggedInUser !: any

  constructor(private router: Router){}

  ngOnInit(){
    if(sessionStorage.length !== null){
      let obj = JSON.parse(sessionStorage.getItem('activeUser') as any)
      this.loggedInUser = obj.username
    }
  
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'AllUsers', icon: 'pi pi-fw pi-calendar'},
      {label: 'Roles', icon: 'pi pi-fw pi-pencil'},
      {label: 'Fetched', icon: 'pi pi-fw pi-file'},
  ];

    this.visibleSidebar1 = true
  }

  onSubmit(){
    sessionStorage.clear()
    this.router.navigateByUrl('/signin')
  }

}
