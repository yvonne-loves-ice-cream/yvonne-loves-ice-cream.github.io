import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { MainComponent } from './main/main.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [   {
  path: '',
  redirectTo: 'about-me',
  pathMatch: 'full'
},
{
  path: 'main',
  component: MainComponent
},    
{
  path: 'experience',
  component: WorkComponent,
},
{
  path: 'blogs',
  component: ReviewsComponent,
},
{
  path: 'about-me',
  component: IntroductionComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
