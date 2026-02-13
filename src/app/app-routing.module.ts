import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { MainComponent } from './main/main.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LandingComponent } from './landing/landing.component';
import { WorkPageComponent } from './work-page/work-page.component';

const routes: Routes = [   {
  path: '',
  redirectTo: 'landing',
  pathMatch: 'full'
},
{
  path: 'contact',
  component: WorkPageComponent, data: { section: 'contact' } 
},    
{
  path: 'beyond-work',
  component: WorkPageComponent, data: { section: 'main' } 
},    
{
  path: 'experience',
  component: WorkPageComponent, data: { section: 'experience' } 
},
{
  path: 'blogs',
  component: ReviewsComponent,
},
{
  path: 'about-me',
  component:  WorkPageComponent, data: { section: 'intro' }
},
{
  path: 'resume',
  component:  WorkPageComponent, data: { section: 'resume' }
},
{
  path:'landing',
  component: LandingComponent
},
 { 
  path: 'work', component: WorkPageComponent, 
  data: { section: 'intro' } },

];

RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
})


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
