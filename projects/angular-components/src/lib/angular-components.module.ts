import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LibInputModule } from './components/input/input.module';
import { LibRadioButtonModule } from './components/radio-button/radio-button.module';
import { LibCheckboxModule } from './components/checkbox/checkbox.module';
import { LibButtonModule } from './components/button/button.module';
import { LibModalModule } from './components/modal/modal.module';
import { LibAccordionModule } from './components/accordion/accordion.module';
import { LibTabsModule } from './components/tabs/tabs.module';
import { LibCarouselModule } from './components/carousel/carousel.module';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    LibInputModule,
    LibRadioButtonModule,
    LibCheckboxModule,
    LibButtonModule,
    LibModalModule,
    LibAccordionModule,
    LibTabsModule,
    LibCarouselModule,
  ],
  exports: [
    LibInputModule,
    LibRadioButtonModule,
    LibCheckboxModule,
    LibButtonModule,
    LibModalModule,
    LibAccordionModule,
    LibTabsModule,
    LibCarouselModule,
  ]
})
export class LibComponentsModule { }
