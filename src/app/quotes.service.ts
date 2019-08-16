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
}
