import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit, OnDestroy {
  quotes;
  subscription;
  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.subscription = this.quotesService.getData().subscribe(data => {
      console.log(data);
      this.quotes = data;
    });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return { background: color };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
