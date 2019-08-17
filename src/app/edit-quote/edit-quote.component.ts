import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  id: string;

  constructor(
    private quotesSerivce: QuotesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
      this.quotesSerivce.getQuote(this.id).subscribe(data => {
        // console.log(data);
        this.quote = data;
      });
    }
  }

  onSave(form) {
    console.log(form);
    const data = form.value;
    if (this.id) {
      this.quotesSerivce.updateQuote(this.id, data).subscribe(quote => {
        console.log(quote);
        this.router.navigateByUrl('/quotes');
      });
    } else {
      this.quotesSerivce.createQuote(data).subscribe(quote => {
        console.log(quote);
        this.router.navigateByUrl('/quotes');
      });
    }
  }
}
