import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-summary.component.html',
  styleUrls: ['./travel-summary.component.css']
})
export class TravelSummaryComponent implements OnInit {
  city: string = '';
  budget: number = 0;
  currencyName: string = '';
  currencySymbol: string = '';
  currencyCode: string = '';
  budgetCOP: number = 0;
  
  weather: any = null;
  exchangeRate: number = 0;
  convertedBudget: number = 0;

  private weatherApiKey = '5d73aeb84ee6d16bdf663a09f2cf7926';
  private exchangeApiKey = '5079f5181c345fbf6b26c85a411bfd6c';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (!params['city']) {
        console.error('⚠️ No se recibió la ciudad en los parámetros.');
        return;
      }

      const selectedCity = JSON.parse(params['city']); // Parseamos el objeto JSON de la ciudad
      this.city = selectedCity.country; // Extraemos el nombre del país
      this.currencyName = selectedCity.currency_name;
      this.currencySymbol = selectedCity.currency_symbol;
      this.currencyCode = selectedCity.currency_code;
      this.budget = Number(params['budget']) || 0;
      this.budgetCOP = this.budget;

      console.log('🌍 Ciudad seleccionada:', this.city);
      console.log('💰 Presupuesto ingresado:', this.budget);

      this.getWeather(); // Llamamos a la función para obtener el clima
      this.getExchangeRate(); // Llamamos a la función para obtener la tasa de cambio
    });
  }


  getWeather() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.weatherApiKey}&units=metric`; // API de clima

  
    this.http.get(weatherUrl).subscribe({
      next: (data: any) => {
        this.weather = data;
        console.log('🌦️ Clima en la ciudad:', this.weather);
      },
      error: (error) => {
        console.error('❌ Error al obtener el clima:', error);
      }
    });
  }

  getImageClima(): string {
    return '/assets/clima.png';
  }
  
  getImageDinero(): string {
    return '/assets/dinero.png';
  }
  getImagePresupuesto(): string {
    return '/assets/presupuesto.png';
  }

  convertBudget() {
    if (this.exchangeRate > 0) {
      this.convertedBudget = this.budgetCOP / this.exchangeRate;  // 🔄 Cambio aquí
      console.log(`💰 Presupuesto convertido: ${this.convertedBudget.toFixed(2)} ${this.currencySymbol}`);
    } else {
      console.error("⚠️ No se puede convertir el presupuesto. La tasa de cambio no está disponible.");
    }
  }
  
  volverInicio() {
    window.location.href = '/budget'; // O usa Router si es Angular con rutas
  }
  
  
  getExchangeRate() {
    const url = `https://open.er-api.com/v6/latest/COP`;
  
    this.http.get<any>(url).subscribe({
      next: (data) => {
        console.log('📡 Respuesta completa de la API:', data);
  
        if (data && data.rates) {
          console.log('💲 Tasas de cambio disponibles:', Object.keys(data.rates));
  
          if (this.currencyCode in data.rates) {
            this.exchangeRate = 1 / data.rates[this.currencyCode];  // 🔄 Invertimos la tasa
            console.log(`✅ Tasa de cambio corregida: 1 ${this.currencyCode} = ${this.exchangeRate} COP`);
  
            // 🔥 Llamar a convertBudget() aquí para actualizar la conversión
            this.convertBudget();
          } else {
            console.error(`⚠️ No se encontró la tasa de cambio para ${this.currencyCode}`);
          }
        } else {
          console.error('❌ No se recibieron datos de tasas de cambio');
        }
      },
      error: (err) => console.error('❌ Error al obtener la tasa de cambio:', err)
    });
  }

  getCityData() {
    const url = `http://127.0.0.1:8000/api/city-data/${this.city}`;
  
    this.http.get<any>(url).subscribe({
      next: (data) => {
        this.weather = data.weather;
        this.exchangeRate = data.exchange_rate.COP_to_USD;
        this.convertBudget();
      },
      error: (err) => console.error('❌ Error al obtener los datos de la ciudad:', err)
    });
  }  
  
}  


