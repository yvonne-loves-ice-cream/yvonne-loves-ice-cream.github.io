import { Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { InterestsComponent } from './interests/interests.component';


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/about-me',
        pathMatch: 'full'
    },
    {
        path: '/work-experience',
        component: ExperiencesComponent
    },
    {
        path: '/interests',
        component: InterestsComponent
    }
]