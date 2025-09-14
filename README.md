# 🌍 Frontend - Travel App  

Este frontend en **Angular 17** permite a los usuarios planificar viajes, administrar presupuestos y consultar información de ciudades, incluyendo clima y tasas de cambio de moneda.  

## 📌 Características  
✅ Diseño responsivo con Angular Material.  
✅ Consumo de APIs para clima y conversión de moneda.  
✅ Manejo de rutas y navegación con `RouterModule`.  
✅ Uso de `HttpClientModule` para peticiones HTTP.  
✅ Formularios reactivos para capturar datos del usuario.  

---

## 🚀 Instalación y Configuración  

### 1️⃣ Clonar el Repositorio  
```bash
git clone https://github.com/Julian19G/TravelAppFrontedAngular.git
cd travel-frontend
2️⃣ Instalar Dependencias
bash
Copiar
Editar
npm install
3️⃣ Configurar Variables de Entorno
Edita src/environments/environment.ts y agrega la URL del backend:

ts
Copiar
Editar
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api'
};
4️⃣ Iniciar la Aplicación
bash
Copiar
Editar
ng serve
La app estará disponible en http://localhost:4200.

🛠️ Estructura del Proyecto
bash
Copiar
Editar
📂 travel-frontend
 ├── 📂 src
 │    ├── 📂 app
 │    │    ├── 📂 components
 │    │    │    ├── 📂 city-selector
 │    │    │    │    ├── city-selector.component.ts
 │    │    │    │    ├── city-selector.component.html
 │    │    ├── 📂 services
 │    │    │    ├── city.service.ts
 │    │    │    ├── weather.service.ts
 │    │    ├── 📂 pages
 │    │    │    ├── 📂 home
 │    │    │    │    ├── home.component.ts
 │    │    │    │    ├── home.component.html
 │    │    │    ├── 📂 summary
 │    │    │    │    ├── summary.component.ts
 │    │    │    │    ├── summary.component.html
 │    │    ├── app.module.ts
 │    │    ├── app-routing.module.ts
 ├── 📂 environments
 │    ├── environment.ts
 ├── angular.json
 ├── package.json
 ├── README.md
