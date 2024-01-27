import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [   {
  path: '',
  redirectTo: 'main',
  pathMatch: 'full'
},
{
  path: 'main',
  component: MainComponent
},    
{
  path: 'work-experience',
  component: WorkComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
