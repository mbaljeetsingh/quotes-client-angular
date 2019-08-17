import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quotes/quote';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Quote[]> {
    return this.http
      .get<Quote[]>(`${baseUrl}/quotes`)
      .pipe(tap(data => console.log('Qutoes: ', data)));
  }

  // http://localhost:3000/quotes/5d4bbd1fa6a90b534472d441
  getQuote(id: string): Observable<Quote> {
    return this.http
      .get<Quote>(`${baseUrl}/quotes/${id}`)
      .pipe(tap(data => console.log('Quote: ', data)));
  }

  // http://localhost:3000/quotes
  createQuote(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(`${baseUrl}/quotes`, quote);
  }

  updateQuote(id: string, quote: Quote): Observable<Quote> {
    return this.http.put<Quote>(`${baseUrl}/quotes/${id}`, quote);
  }

  deleteQuote(id: string) {
    return this.http.delete(`${baseUrl}/quotes/${id}`);
  }
}
