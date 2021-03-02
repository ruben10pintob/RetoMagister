import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  
  getRamas() {
    return this.firestore.collection("ramas").snapshotChanges();
  }

  getProvincias() {
    return this.firestore.collection("provincias").snapshotChanges();
  }
  
  getHorarios() {
    return this.firestore.collection('horarios').snapshotChanges();
  }

  getModalidades() {
    return this.firestore.collection('modalidades').snapshotChanges();
  }

  getTarifas() {
    return this.firestore.collection('tarifas').snapshotChanges();
  }

  getComunidad() {
    return this.firestore.collection('comunidades').snapshotChanges();
  }
}