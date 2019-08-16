import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditQuoteRoutingModule } from './edit-quote-routing.module';
import { EditQuoteComponent } from './edit-quote.component';


@NgModule({
  declarations: [EditQuoteComponent],
  imports: [
    CommonModule,
    EditQuoteRoutingModule
  ]
})
export class EditQuoteModule { }
