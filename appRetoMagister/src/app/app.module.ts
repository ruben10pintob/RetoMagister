import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing'; // Para el tema de routing
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AsideComponent } from './components/aside/aside.component';
import { EspecializacionComponent } from './components/especializacion/especializacion.component';
import { HorarioModalidadComponent } from './components/horario-modalidad/horario-modalidad.component';
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { DireccionComponent } from './components/direccion/direccion.component';
import { FormasPagoComponent } from './components/formas-pago/formas-pago.component';
import { AgradecimientosComponent } from './components/agradecimientos/agradecimientos.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    EspecializacionComponent,
    HorarioModalidadComponent,
    TarifaComponent,
    DatosPersonalesComponent,
    DireccionComponent,
    FormasPagoComponent,
    AgradecimientosComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
