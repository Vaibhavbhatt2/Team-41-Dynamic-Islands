import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsserviceService {
  private baseURL3 = "http://localhost:8080/api/v1/home/bookdetails";
  constructor(private httpClient: HttpClient) { }
  createBook(book:Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL3}`, book);
  }
}
