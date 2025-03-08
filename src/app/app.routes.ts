import { Routes } from '@angular/router';
import { TravelBudgetComponent } from './components/travel-budget/travel-budget.component';
import { TravelSummaryComponent } from './travel-summary/travel-summary.component';

export const routes: Routes = [
  { path: '', component: TravelBudgetComponent }, // 👈 Esto carga la pantalla inicial
  { path: 'summary', component: TravelSummaryComponent },
  { path: '**', redirectTo: '' } // 👈 Si la ruta no existe, vuelve a la página inicial
];
