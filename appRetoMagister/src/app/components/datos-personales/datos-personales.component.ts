import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  public user: User;

  constructor(
  ) { 
    this.user = new User('','','','','','','','','','','','','','','','');
  }

  ngOnInit(): void {
  }

}
