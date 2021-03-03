import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-part-4';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

public user: User;
  public userString: string;

  constructor(
    private _router: Router
  ) { 
    this.user = new User('','','');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userString = JSON.stringify(this.user);
    localStorage.setItem('Usuario 4', this.userString);
    this._router.navigate(['/direccion']);
  }

}
