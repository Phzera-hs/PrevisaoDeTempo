import { Routes } from '@angular/router';
import { ClimateViewComponent } from './climate-view/climate-view.component';

export const routes: Routes = [
  { path: ' ', pathMatch: 'full', redirectTo: '/climate-view' },
  { path: 'climate-view', component: ClimateViewComponent },
];
