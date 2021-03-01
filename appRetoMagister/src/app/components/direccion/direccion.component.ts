import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  public user: User;

  constructor(
  ) { 
    this.user = new User('','','','','','','','','','','','','','','','');
  }

  ngOnInit(): void {
  }

}
