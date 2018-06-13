import {Component, HostBinding, OnInit} from "@angular/core";
import {User} from "../shared/models/user.model";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {fadeStateTrigger} from "../shared/animations/fade.animations";


@Component({
selector: 'pay-system',
  templateUrl: './system.component.html',
  animations: [fadeStateTrigger],
  styleUrls: ['./system.component.scss']

})

export class SystemComponent{
  constructor(private authService: AuthService,
              private router: Router){}

  user: User;  
  @HostBinding('@fade')  a = true;

  ngOnInit(){
      this.user=JSON.parse(window.localStorage.getItem('user'));
    }

    onLogout(){
      this.authService.logout();
      this.router.navigate(['/login']);
    }

}
