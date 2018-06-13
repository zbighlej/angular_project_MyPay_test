import {Component, HostBinding, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user.model";
import {Router} from "@angular/router";
import {fadeStateTrigger} from "../../shared/animations/fade.animations";

@Component({
  selector: 'pay-registration',
  templateUrl: './registration.component.html',
  animations: [fadeStateTrigger],
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @HostBinding('@fade')  a = true;
  form: FormGroup;


  constructor(
    private usersService: UsersService,
    private router: Router
  )
  {}

ngOnInit()
{

  this.form = new FormGroup({
    'mail': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
    'pass': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    'name': new FormControl(null, [Validators.required])
  });

}

onSubmit(){
   const {mail, pass, name} = this.form.value;
   const user = new User(mail, pass, name);

  this.usersService.createNewUser(user)
    .subscribe(() => {
       this.router.navigate(['/login'], {

          queryParams:{
          nowCanLogin: true
         }

      });
    });


}
  forbiddenEmails(control: FormControl): Promise<any>{
      return new Promise((resolve, reject) => {
          this.usersService.getUserByEmail(control.value)
            .subscribe((user: User) => {
                if (user)  {
                  resolve({forbiddenEmail: true});
                } else {
                  resolve(null);
                }
            });
      });
  }

}


