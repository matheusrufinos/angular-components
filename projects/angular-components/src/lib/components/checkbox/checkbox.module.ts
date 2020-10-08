import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent]
})
export class LibCheckboxModule {}
