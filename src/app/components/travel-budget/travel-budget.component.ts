import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityService } from '../../services/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-budget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './travel-budget.component.html',
  styleUrls: ['./travel-budget.component.css']
})
export class TravelBudgetComponent implements OnInit {
  cities: any[] = []; // Ahora almacena objetos completos
  selectedCity: any = null; // Debe ser un objeto, no solo un string
  budget: number = 0;

  constructor(private cityService: CityService, private router: Router) {}

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    this.cityService.getCities().subscribe({
      next: (data) => {
        console.log('Ciudades recibidas:', data);
        this.cities = data; // Guardamos toda la información de la ciudad
      },
      error: (err) => console.error('Error al obtener ciudades:', err)
    });
  }

  continue() {
    console.log('🌍 Ciudad seleccionada:', this.selectedCity);
  console.log('💰 Presupuesto ingresado:', this.budget);

  this.router.navigate(['/summary'], { 
    queryParams: { 
      city: JSON.stringify(this.selectedCity), // Convierte el objeto a JSON
      budget: this.budget 
    } 
  });
  
    
  
  }
}
