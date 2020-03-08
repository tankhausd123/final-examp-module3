import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
  {path: 'awesome', component: ListComponent},
  {path: 'awesome/create', component: CreateComponent},
  {path: 'awesome/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
