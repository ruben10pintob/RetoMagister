import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {

  public user: User;

  constructor(
  ) { 
    this.user = new User('','','','','','','','','','','','','','','','');
  }

  ngOnInit(): void {
  }

}
