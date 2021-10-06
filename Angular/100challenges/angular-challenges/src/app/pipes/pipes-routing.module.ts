import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';

const routes: Routes = [
  {
   path: '',
   component: PipesDocumentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
