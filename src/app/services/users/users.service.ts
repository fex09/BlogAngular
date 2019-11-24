import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: User[];
  public selectedUser: User;

  constructor() {
    this.users = [];
    const  u1  = new User();
    u1.id = 2;
    u1.firstname = 'Fénix';
    u1.lastname = 'Solís';
    u1.email = 'fsolisg@gmail.com';
    u1.gender = 'Male';
    u1.birthdate = new Date('1983-06-09');
    this.users.push(u1);
   }

  public getUserList(): User[] {
    return this.users;
  }

  public addUser(pUser: User): void {
    this.users.push(pUser);
  }

  public editUser(pUser: User): void {
    let userEdit: User;
    userEdit = this.users.find((user: User) => {
      return user.id === pUser.id;
    });
    userEdit.firstname = pUser.firstname;
    userEdit.lastname = pUser.lastname;
    userEdit.gender = pUser.gender;
    userEdit.email = pUser.email;
    userEdit.password = pUser.password;
    userEdit.birthdate = pUser.birthdate;
  }

  public deleteUser(pId: number): void {
    this.users = this.users.filter((user: User) => {
      return user.id !== pId;
    });
  }

  public viewSelectedUser(id: number): void {
    this.selectedUser = this.users.find((user: User) => {
      return user.id === id;
    });
  }

}
