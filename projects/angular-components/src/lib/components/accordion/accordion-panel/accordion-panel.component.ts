import { Component, Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'lib-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss']
})
export class AccordionPanelComponent implements OnInit {
  @Input() title: string;

  @Input() active: boolean = false;

  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  iconColor: string = 'black';

  constructor (public readonly element: ElementRef,) { }

  ngOnInit(): void {
    this.iconColor = this.getInheritedColor('--action-navigation-static');
  }

  getInheritedColor(variable: string): string {
    return window.getComputedStyle(this.element.nativeElement, null).getPropertyValue(variable);
  }

  onClick(event) {
    event.preventDefault();
    this.toggleAccordion.emit(this.active);
  }

}
