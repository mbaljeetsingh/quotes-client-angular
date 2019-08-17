import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.scss']
})
export class EditQuoteComponent implements OnInit {
  quote = {
    title: '',
    author: ''
  };

  constructor(private quotesSerivce: QuotesService) {}

  ngOnInit() {}

  onSave(form) {
    console.log(form);
    const data = form.value;
    this.quotesSerivce.createQuote(data).subscribe(data => {
      console.log(data);
    });
  }
}
