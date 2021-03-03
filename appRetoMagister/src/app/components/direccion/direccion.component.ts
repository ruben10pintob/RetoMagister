import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-part-5';
import { Router } from '@angular/router';

import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  public user: User;
  public userString: string;

  public comunidades: any;
  public provincias: any;

  constructor(
    private _router: Router,
    private firebaseService: FirebaseServiceService,
  ) { 
    this.user = new User('','','','','');
    this.comunidades = { count: 0, data: [] };
    this.provincias = { count: 0, data: [] };
  }

  ngOnInit(): void {

    this.firebaseService.getComunidad().subscribe( resp => {

      this.comunidades.data = resp.map((element: any) =>{

        return {
          comunidad: element.payload.doc.data().comunidad,
        }

      });

    });

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
    localStorage.setItem('Usuario 5', this.userString);
    this._router.navigate(['/formas-de-pago']);
  }

}
