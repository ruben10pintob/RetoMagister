import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-horario-modalidad',
  templateUrl: './horario-modalidad.component.html',
  styleUrls: ['./horario-modalidad.component.css']
})
export class HorarioModalidadComponent implements OnInit {

  public user: User;

  constructor(
  ) { 
    this.user = new User('','','','','','','','','','','','','','','','');
  }

  ngOnInit(): void {
  }

}
