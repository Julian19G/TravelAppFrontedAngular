import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  standalone: true,
  imports: [CommonModule], // <-- Importa CommonModule aquí
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: any[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cityService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }
}
