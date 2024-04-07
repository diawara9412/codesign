import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  { path: '', component: GlobalComponent,
  children: [
    { path: '', component: AccueilComponent},
 
   
   
  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
