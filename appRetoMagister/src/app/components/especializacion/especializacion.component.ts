import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-especializacion',
  templateUrl: './especializacion.component.html',
  styleUrls: ['./especializacion.component.css']
})
export class EspecializacionComponent implements OnInit {

  public user: User;
  public userString: string;
  
  public ramas = { count: 0, data: [] }
  public provincias = { count: 0, data: [] }

  constructor(
    private _router: Router,
    private firebaseService: FirebaseServiceService,
  ) { 
    this.user = new User('','','','','','','','','','','','','','','','');
  }

  ngOnInit(): void {

    // LISTAR EN EL SELECT LAS RAMAS DESDE FIREBASE

    this.firebaseService.getRamas().subscribe( resp => {

      this.ramas.data = resp.map((element: any) => {

        return {
          rama: element.payload.doc.data().nombre_rama,
        }
      })

    },
      error => {
        console.error(error);
      }
    );

    // LISTAR EN EL SELECT LAS PROVINCIAS DESDE FIREBASE

    this.firebaseService.getProvincias().subscribe( resp => {

      this.provincias.data = resp.map((element: any) => {

        return {
          provincia: element.payload.doc.data().provincia,
        }

      })

    }, error => {
      console.log(error);
      }
    );

  }

  onSubmit() {
    this.userString = JSON.stringify(this.user);
    localStorage.setItem('Usuario', this.userString);
    this._router.navigate(['/horario-modalidad']);
  }

}
