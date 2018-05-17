import {Component, OnInit} from "@angular/core";
import {User} from "../shared/models/user.model";


@Component({
selector: 'pay-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})

export class SystemComponent{
  constructor(){}

  user: User;

  ngOnInit(){
      this.user=JSON.parse(window.localStorage.getItem('user'));
    }

}
