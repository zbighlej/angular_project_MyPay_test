import {Component, OnInit} from "@angular/core";
import {User} from "../shared/models/user.model";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";


@Component({
selector: 'pay-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})

export class SystemComponent{
  constructor(private authService: AuthService,
              private router: Router){}

  user: User;

  ngOnInit(){
      this.user=JSON.parse(window.localStorage.getItem('user'));
    }

    onLogout(){
      this.authService.logout();
      this.router.navigate(['/login']);
    }

}
