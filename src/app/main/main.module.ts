import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
      path:'',
    loadChildren:()=>import('./pages/pages.module').then(m => m.PagesModule)

    }
];

@NgModule({
   declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    RouterModule.forChild(routes)
  ],
  exports:[PagesModule]
  
})
export class MainModule { }
