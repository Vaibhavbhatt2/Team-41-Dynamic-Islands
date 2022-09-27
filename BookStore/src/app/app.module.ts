import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';

import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HttpContext} from '@angular/common/http';


import { SignupComponent } from './signup/signup.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';
import { AuthorComponent } from './author/author.component';
import { ConformComponent } from './conform/conform.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    FavoriteComponent,
    UpdateComponent,
    SearchComponent,
    AuthorComponent,
    ConformComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
