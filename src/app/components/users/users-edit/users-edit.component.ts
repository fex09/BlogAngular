import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { AppComponent } from '../../main/app.component';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  public userInput: User;
  constructor(
    private userService: UsersService,
    private myapp: AppComponent
  ) {
    this.userInput = this.userService.selectedUser;
  }

  ngOnInit() {
  }

  public updateUser(form: NgForm): void {
    if (form.invalid) {
      alert('Formulario inválido!');
      return;
    }
    this.userService.editUser(this.userInput);
    this.back();
  }

  public back(): void {
    this.myapp.pageSection = 'users';
  }


}
