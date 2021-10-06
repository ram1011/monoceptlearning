import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'form',
    component: ReactiveformsComponent,
    canActivate:
  }
];

@NgModule({
  providers : [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
