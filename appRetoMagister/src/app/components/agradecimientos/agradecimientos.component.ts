import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-agradecimientos',
  templateUrl: './agradecimientos.component.html',
  styleUrls: ['./agradecimientos.component.css']
})
export class AgradecimientosComponent implements OnInit {

  public user1: any;
  public user2: any;
  public user3: any;
  public user4: any;
  public user5: any;
  public user6: any;
  public userRegister: any;

  constructor(
    private firebaseService: FirebaseServiceService,
  ) {
    this.user1 = JSON.parse(localStorage.getItem("Usuario"));
    this.user2 = JSON.parse(localStorage.getItem("Usuario 2"));
    this.user3 = JSON.parse(localStorage.getItem("Usuario 3"));
    this.user4 = JSON.parse(localStorage.getItem("Usuario 4"));
    this.user5 = JSON.parse(localStorage.getItem("Usuario 5"));
    this.user6 = JSON.parse(localStorage.getItem("Usuario 6"));
    this.userRegister = { user: [] };
   }

  ngOnInit(): void {

    this.userRegister.user.push(this.user1, this.user2, this.user3, this.user4 ,this.user5, this.user6);
    
    if (this.user1 != null) {
      this.firebaseService.createUser(this.userRegister);
    }

    localStorage.clear();

  }

}
