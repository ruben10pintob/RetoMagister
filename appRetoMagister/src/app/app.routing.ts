// Importar los módulos del router de angular

import { ModuleWithProviders } from '@angular/core'; // nos permite generar un modulo con el tema de las rutas y tenerlo separado
import { Routes, RouterModule } from '@angular/router'; // generar objetos de rutas y generar modulo para establecer cofiguracion dentro del framework

// Importar coponentes con páginas exclusivas

import { HomeComponent } from './components/home/home.component';
//import { AsideComponent } from './components/aside/aside.component';
import { EspecializacionComponent } from './components/especializacion/especializacion.component';
import { HorarioModalidadComponent } from './components/horario-modalidad/horario-modalidad.component';
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { DireccionComponent } from './components/direccion/direccion.component';
import { FormasPagoComponent } from './components/formas-pago/formas-pago.component';
import { AgradecimientosComponent } from './components/agradecimientos/agradecimientos.component';


// Arrays de rutas

const appRoutes: Routes = [
    // Le decimos la ruta y el componente que queremos que se ejecute 
    { path: '', component: HomeComponent }, 
    { path: 'home', component: HomeComponent },
    { path: 'especializacion', component: EspecializacionComponent },
    { path: 'horario-modalidad', component: HorarioModalidadComponent },
    { path: 'tarifa', component: TarifaComponent },
    { path: 'datos-personales', component: DatosPersonalesComponent },
    { path: 'direccion', component: DireccionComponent},  
    { path: 'formas-de-pago', component: FormasPagoComponent },
    { path: 'agradecimientos', component: AgradecimientosComponent },

]

// Exportar modulo de rutas

export const appRoutingProviders: any[] = []; // establecer como servicio el router | se carga en module.ts
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); // carga la configuracion de rutas | se carga en module.ts