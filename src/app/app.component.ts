import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./components/background/background.component";
import { TravelBudgetComponent } from "./components/travel-budget/travel-budget.component";
import { CityListComponent } from './components/city-list/city-list.component';
import { NgParticlesModule } from "ng-particles"; // Importar el módulo de partículas

@Component({
  selector: 'app-root',
  standalone: true, // 👈 Mantener standalone
  imports: [RouterOutlet, BackgroundComponent, TravelBudgetComponent, CityListComponent, NgParticlesModule], // 👈 Agregar NgParticlesModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelApp';
  particlesOptions = {
    background: {
      color: { value: "#000000" }
    },
    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2 }
    }
  };
}

