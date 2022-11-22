import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  //UserListComponent
  {
    path: '', component: UserListComponent
  },

  //ViewUserComponent 
  {
    path: 'view-user/:id', component: ViewUserComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
