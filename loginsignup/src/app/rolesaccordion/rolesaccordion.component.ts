import { Component } from '@angular/core';

@Component({
  selector: 'app-rolesaccordion',
  templateUrl: './rolesaccordion.component.html',
  styleUrls: ['./rolesaccordion.component.css']
})
export class RolesaccordionComponent {
  roleName : any = ''

  values : any = [{value:'',permission : ''}]


  ngOnInit(){
    console.log(this.values);
    this.values = [...JSON.parse(localStorage.getItem('rolesArray') as string)]
  }

  onSubmit(){
   console.log(this.values);
   localStorage.setItem('rolesArray', JSON.stringify(this.values))
  }

 

  onAdd(){
    
    console.log(this.values);
    
    this.values.push({value : "",permission : ""})
  }
}
