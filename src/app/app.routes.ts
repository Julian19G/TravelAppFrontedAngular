import { Routes } from '@angular/router';
import { TravelBudgetComponent } from './components/travel-budget/travel-budget.component';
import { TravelSummaryComponent } from './travel-summary/travel-summary.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 👈 Inicio en login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'budget', component: TravelBudgetComponent },
  { path: 'summary', component: TravelSummaryComponent },
  { path: '**', redirectTo: 'login' } // 👈 Cualquier ruta inválida va a login
];

