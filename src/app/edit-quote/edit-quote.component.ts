import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  onSave(form) {
    console.log(form);
  }
}
