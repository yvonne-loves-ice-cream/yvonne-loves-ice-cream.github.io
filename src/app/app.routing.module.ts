import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { InterestsComponent } from './interests/interests.component';

const routes: Routes = [   {
  path: '',
  redirectTo: 'about-me',
  pathMatch: 'full'
},
{
  path: 'about-me',
  component: ContentsComponent,
},    
{
  path: 'work-experience',
  component: ExperiencesComponent,
},
{
  path: 'interests',
  component: InterestsComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
