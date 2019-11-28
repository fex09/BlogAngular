import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './components/main/app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { PostAddComponent } from './components/posts/post-add/post-add.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';
import { PostEditComponent } from './components/posts/post-edit/post-edit.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { PhotosListComponent } from './components/photos/photos-list/photos-list.component';
import { PhotosAddComponent } from './components/photos/photos-add/photos-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    PostListComponent,
    UsersListComponent,
    HomeComponent,
    PostAddComponent,
    UsersAddComponent,
    PostEditComponent,
    UsersEditComponent,
    PhotosListComponent,
    PhotosAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
