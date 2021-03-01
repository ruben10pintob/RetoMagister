import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-especializacion',
  templateUrl: './especializacion.component.html',
  styleUrls: ['./especializacion.component.css']
})
export class EspecializacionComponent implements OnInit {

  public user: User;

  constructor(
  ) { 
    this.user = new User('','','','','','','','','','','','','','','','');
  }

  ngOnInit(): void {
  }

}
