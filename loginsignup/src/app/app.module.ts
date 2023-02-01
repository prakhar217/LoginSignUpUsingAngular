import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {DialogModule} from 'primeng/dialog';
import {PaginatorModule} from 'primeng/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllusersComponent } from './allusers/allusers.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { RolesaccordionComponent } from './rolesaccordion/rolesaccordion.component';
import {AccordionModule} from 'primeng/accordion';
import { HomeComponent } from './home/home.component';
import { UserpaginationComponent } from './userpagination/userpagination.component';
import {InputTextModule} from 'primeng/inputtext';
import { UpdateformComponent } from './updateform/updateform.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {TabViewModule} from 'primeng/tabview';



const appRoute: Routes = [
  { path: '', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  {path: 'home' , component:HomeComponent},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: 'allusers',
        component: AllusersComponent
      },
      {
        path : 'roles',
        component:RolesaccordionComponent
      },
      {
        path:'userpagination',
        component:UserpaginationComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    AllusersComponent,
    RolesaccordionComponent,
    HomeComponent,
    UserpaginationComponent,
    UpdateformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    SplitButtonModule,
    TableModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    FormsModule,
    AccordionModule ,
    PaginatorModule,
    InputTextModule,
    DialogModule,
    TabMenuModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
