import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { Book } from './book';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  //private baseURL = "http://localhost:8080/api/v1/home";
  //private baseURL1 = "http://localhost:8080/api/v1/home/login";
  //private baseURL2 = "http://localhost:8080/api/v1/home/forgetPassword";
  //private baseURL3 = "http://localhost:8080/api/v1/home/bookdetails";
  //private baseURL4 = "http://localhost:8080/api/v1/home/favorites";
  //private baseURL5 = "http://localhost:8080/api/v1/home/delete";
  private baseURL = "http://localhost:8081/api/v1/home";
  private baseURL1 = "http://localhost:8081/api/v1/home/login";
  private baseURL2 = "http://localhost:8081/api/v1/home/forgetPassword";
  private baseURL3 = "http://localhost:8082/api/v1/home/bookdetails";
  private baseURL4 = "http://localhost:8082/api/v1/home/favorites";
  private baseURL5 = "http://localhost:8082/api/v1/home/delete";

  searchUrl = "http://openlibrary.org/search.json?q=";
  authorUrl = "http://openlibrary.org/search/authors.json?q=a";

  constructor(private httpClient: HttpClient) { 
    
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getuserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  Userlogin(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, user);
  }

  forgetPassword(user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL2}`, user);
  }

  searchBook(data:any){
    return this.httpClient.get(`${this.searchUrl}${data.data.replaceAll(" ","+")}`);
  }

  searchAuthor() {
    //this.authorUrl=this.authorUrl+letter;
    return this.httpClient.get(`${this.authorUrl}`);
  }
  createBook(book:Book): Observable<Object>{
   return this.httpClient.post(`${this.baseURL3}`,book);
  }

  getfavoritenames(username:string): Observable<Book[]>{
    let queryParams = new HttpParams().append("username",username);
    return this.httpClient.get<Book[]>(`${this.baseURL4}`,{params:queryParams});
  }

  deletebook(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL5}/${id}`);
  }
}
