import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  visibleSidebar1 !: boolean 
  selectedValue!: any
  city!: string;

  selectedCategory: any = null;

  ngOnInit(){
    this.visibleSidebar1 = true
  }
}
