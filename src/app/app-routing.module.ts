import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VaderprognosComponent } from './vaderprognos/vaderprognos.component';
import { VaderDataComponent } from './vader-data/vader-data.component';


const routes: Routes = [
  { path: 'vaderdata/:vader', component: VaderDataComponent },
  { path: 'vaderprognos', component: VaderprognosComponent},
  { path: '',  redirectTo: '/vaderprognos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }