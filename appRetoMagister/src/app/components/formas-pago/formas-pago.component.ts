import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-part-6';
import { Router } from '@angular/router';

import { FirebaseServiceService } from '../../services/firebase-service.service'

@Component({
  selector: 'app-formas-pago',
  templateUrl: './formas-pago.component.html',
  styleUrls: ['./formas-pago.component.css']
})
export class FormasPagoComponent implements OnInit {

  public user: User;
  public userString: string;

  constructor(
    private _router: Router,
    private firebaseService: FirebaseServiceService,
  ) { 
    this.user = new User('','');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userString = JSON.stringify(this.user);
    localStorage.setItem('Usuario 6', this.userString);
    this._router.navigate(['/agradecimientos']);
  }

}
