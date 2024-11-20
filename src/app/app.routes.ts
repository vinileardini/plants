import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card/card.component';
import { BigCardComponent } from './big-card/big-card/big-card.component';
import { HomepageComponent } from './home/homepage/homepage.component';
export const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'content/:id',
    component:BigCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }