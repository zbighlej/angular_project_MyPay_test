import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user.model";


  @Injectable()

export class UsersService{

  constructor(private http : Http) {}

    getUserByEmail(mail: string): Observable<User>{
      return this.http.get(`http://localhost:3000/users?mail=${mail}`)
        .map((response: Response) => response.json()) //строку в обьект который обернут в массив
        .map((user: User[]) => user [0] ? user[0] : undefined ); //массив в обьект

  }


  createNewUser(user: User): Observable<User>{
   return this.http.post('http://localhost:3000/users', user)
      .map((response: Response) => response.json());
  }

}
