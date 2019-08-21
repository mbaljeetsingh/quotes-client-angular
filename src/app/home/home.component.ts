import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Quote } from '../quotes/quote';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: Observable<Quote>;
  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quote = this.quotesService.getQuote('5d5cd4ddb141e240f02be8d4');
  }
}
