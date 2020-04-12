import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {RedirectGuard} from './router-guard/router-guard.component';

const routes: Routes = [
  {path: '', component: ProfileComponent, pathMatch: 'full'},
  {
    path: 'resume',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'assets/resume/Resume_Vivek_Bhat.pdf'
    }
  },
  {path: '**', redirectTo: ''},
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
