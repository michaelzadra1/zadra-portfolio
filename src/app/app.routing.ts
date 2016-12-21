import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Import our components
// Component views import
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ResumeComponent} from './resume/resume.component';
import {MusicComponent} from './music/music.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: 'blog', component: BlogComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'music', component: MusicComponent}
    ]
  },


  // If route doesn't exist
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
// Here we are exporting our routes
export const routing = RouterModule.forRoot(appRoutes);
// Here we are combining our routing components into a single array. We will use this a little later when we update our root module
export const routedComponents = [
  HomeComponent,
  BlogComponent,
  PortfolioComponent,
  ResumeComponent,
  MusicComponent
];
