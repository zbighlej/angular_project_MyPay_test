import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user.model";
import {AuthService} from "../../shared/services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
//import {Message} from "../../shared/models/message.model";

@Component({
  selector: 'pay-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  //message: Message; для сообщ

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe((params: Params) => {
          if(params['nowCanLogin']) {
            alert('Теперь вы можете войти!')
          } else if (params['accessDenied']) {
              alert('Для работы вам нужно залогинится!')
          }
          });

    //this.message  = new Message('danger', ''); для сообщ
    this.form = new FormGroup({
      'mail': new FormControl(null, [Validators.required,Validators.email]),
      'pass': new FormControl(null, [Validators.required, Validators.minLength(6)])

    });

    // private showMessage(message: Message){ для сообщ
    //   this.message = message;
    //   window.setTimeout(() => {
    //     this.message.text = '';
    //   }, 5000);
    // }

  }

  onSubmit(){
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.mail)
      .subscribe((user: User) => {

      if (user){
        if(user.pass === formData.pass){


          this.authService.login();
          window.localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['system/bill']); //редирект на страницу при авторизаци



        } else {
          alert('пароль не верный!');
        }

       } else {

        alert('такого пользователя нету!');
       }
      });

  }

}
