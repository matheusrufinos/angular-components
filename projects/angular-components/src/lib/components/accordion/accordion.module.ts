import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';


@NgModule({
    imports: [CommonModule],
    declarations: [AccordionComponent, AccordionPanelComponent],
    exports: [AccordionComponent, AccordionPanelComponent]
})
export class LibAccordionModule { }
