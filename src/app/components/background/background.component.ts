import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'] // ✅ Corrección aquí (de styleUrl a styleUrls)
})
export class BackgroundComponent {
  particlesOptions = {
    background: { color: { value: "#000000" } },
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

