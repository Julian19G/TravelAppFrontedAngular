import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app
})
export class CityService {
  private apiUrl = 'http://localhost:8000/api/cities'; // URL de la API

  constructor(private http: HttpClient) {}

  getCities(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Devuelve un Observable con el array de ciudades
  }
}
