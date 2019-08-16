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
    this.quote = this.quotesService.getQuote('5d4bbd1fa6a90b534472d441');
  }
}
