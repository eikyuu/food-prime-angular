import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeComponent } from './components/prime/prime.component';


const routes: Routes = [
  { path: '', component: PrimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
