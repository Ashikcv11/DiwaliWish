import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { WishComponent } from './wish/wish.component';
import { WishallComponent } from './wishall/wishall.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'success/:id',component:FormComponent},
  {path:'wish/:id',component:WishComponent},
  {path: 'wish-all',component:WishallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
