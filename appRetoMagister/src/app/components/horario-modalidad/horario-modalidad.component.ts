import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-part-2';
import { Router } from '@angular/router';

import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-horario-modalidad',
  templateUrl: './horario-modalidad.component.html',
  styleUrls: ['./horario-modalidad.component.css']
})
export class HorarioModalidadComponent implements OnInit {

  public user: User;
  public userString: string;

  public modalidades: any; 
  public horarios: any;

  constructor(
    private _router: Router,
    private firebaseService: FirebaseServiceService,
    
  ) { 
    this.user = new User('','');
    this.modalidades = { count: 0, data: [] };
    this.horarios = { count: 0, data: [] };
  }

  ngOnInit(): void {

    // OBTENER MODALIDADES DESDE FIREBASE

    this.firebaseService.getModalidades().subscribe( resp => {

      this.modalidades.data = resp.map(( element: any) => {
        return {
          modalidad: element.payload.doc.data().modalidad,
        }

      });

    }, error => {
      console.log(error());
    });

    // OBTENER HORARIOS DESDE FIREBASE

    this.firebaseService.getHorarios().subscribe( resp => {

      this.horarios.data = resp.map( (element: any ) => {
        return {
          horario: element.payload.doc.data().horario,
        }
      });

    }, error => {
      console.log(error);
    })


  }

  onSubmit() {
    this.userString = JSON.stringify(this.user);
    localStorage.setItem('Usuario 2', this.userString);
    this._router.navigate(['/tarifa']);
  }

}
