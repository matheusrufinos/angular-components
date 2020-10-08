import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';

@Component({
  selector: 'lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionPanelComponent) accordions: QueryList<AccordionPanelComponent>;
  private subscriptions = [];
  private _accordions;

  constructor() {}

  ngAfterContentInit() {
    this._accordions = this.accordions;
    this.removeSubscriptions();
    this.addSubscriptions();

    this.accordions.changes.subscribe(rex => {
      this._accordions = rex;
      this.removeSubscriptions();
      this.addSubscriptions();
    });
  }

  addSubscriptions() {
    this._accordions.forEach(a => {
      const subscription = a.toggleAccordion.subscribe(e => {
        this.toogleAccordion(a);
      });
      this.subscriptions.push(subscription);
    });
  }

  removeSubscriptions() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  toogleAccordion(accordion) {
    if (!accordion.active) {
      this.accordions.forEach(a => a.active = false);
    }
    
    accordion.active = !accordion.active;
  }

  ngOnDestroy() {
    this.removeSubscriptions();
  }

}
