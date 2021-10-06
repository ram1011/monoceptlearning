import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';
import { TruncatePipe } from './truncate.pipe';
import { CreditcardnumberformaterPipe } from './creditcardnumberformater.pipe';

@NgModule({
  declarations: [PipesDocumentationComponent, TruncatePipe, CreditcardnumberformaterPipe],
  imports: [CommonModule, PipesRoutingModule],
})
export class PipesModule {}
