import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Input() linkActive: string;

  public opciones: Array<string>;
  public icon_default: string;
  public icon_active: string;

  constructor() { 

    this.opciones = [
      '¿En qué te quieres especializar?',
      'Horario y Modalidad',
      'Tarifa',
      'Datos personales',
      'Dirección',
      'Forma de pago'
    ],

    this.icon_default = "fas fa-circle",
    this.icon_active = "far fa-circle"

  }

  ngOnInit(): void {
    
  }

}
