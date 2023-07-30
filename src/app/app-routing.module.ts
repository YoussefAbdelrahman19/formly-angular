import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingSideComponent } from './components/setting-side/setting-side.component';
import { ViewSideComponent } from './components/view-side/view-side.component';

const routes: Routes = [
  { path: 'settingSide', component: SettingSideComponent },
  {
    path: '',
    redirectTo: '/settingsSide',
    pathMatch: 'full',
  },
  { path: 'viewSide', component: ViewSideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
