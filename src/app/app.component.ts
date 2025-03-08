import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./components/background/background.component";
import { TravelBudgetComponent } from "./components/travel-budget/travel-budget.component";
import { CityListComponent } from './components/city-list/city-list.component';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 Agregar standalone: true
  imports: [RouterOutlet, BackgroundComponent, TravelBudgetComponent, CityListComponent], // 👈 Se combinan todas las imports aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenidos';
}

