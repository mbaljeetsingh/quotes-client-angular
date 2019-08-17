import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar
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
        this.snackBar.open('Quote Updated');
        console.log(quote);
        this.router.navigateByUrl('/quotes');
      });
    } else {
      this.quotesSerivce.createQuote(data).subscribe(quote => {
        this.snackBar.open('Quote Created');
        console.log(quote);
        this.router.navigateByUrl('/quotes');
      });
    }
  }
}
