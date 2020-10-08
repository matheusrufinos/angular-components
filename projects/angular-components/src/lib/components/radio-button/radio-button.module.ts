import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RadioButtonComponent } from './radio-button.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent]
})
export class LibRadioButtonModule {}
