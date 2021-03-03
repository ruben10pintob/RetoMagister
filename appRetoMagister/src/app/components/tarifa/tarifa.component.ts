import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-part-3';
import { Router } from '@angular/router';

import { FirebaseServiceService } from '../../services/firebase-service.service'

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {

  public user: User;
  public userString: string;

  public tarifas: any;

  constructor(
    private firebaseService: FirebaseServiceService,
    private _router: Router,
  ) { 
    this.user = new User('');
    this.tarifas = { count: 0, data: [] };
  }

  ngOnInit(): void {

    // OBTENER TARIFAS DESDE FIREBASE

    this.firebaseService.getTarifas().subscribe( resp => {

      this.tarifas.data = resp.map((element: any) => {
        return {
          tarifa: element.payload.doc.data().tarifa,
        }
      });

    }, error => {
      console.log(error);
    });


  }

  onSubmit() {
    this.userString = JSON.stringify(this.user);
    localStorage.setItem('Usuario 3', this.userString);
    this._router.navigate(['/datos-personales']);
  }

}
