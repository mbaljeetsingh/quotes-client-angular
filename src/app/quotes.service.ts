import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quotes/quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Quote[]> {
    return this.http.get<Quote[]>('http://localhost:3000/quotes');
  }
}
