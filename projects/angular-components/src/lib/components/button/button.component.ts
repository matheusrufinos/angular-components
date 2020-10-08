import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'convesion' | 'navigation' | 'contrast';
  @Input() size: 'standard' | 'small' | 'large' = 'standard';
  @Input() orientation: 'content' | 'container' = 'content';
  @Input() style: 'solid' | 'outline' = 'solid';

  getClass(): string {
    return `${this.color} ${this.size} ${this.orientation} ${this.style}`;
  }

}
