import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './modules/category/category.component';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [ 
  
  { path: "home", component: HomeComponent },
  { path: "category", component: CategoryComponent },
  { path: "**", redirectTo: "home" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
