import { Component, Input, AfterViewInit, ViewEncapsulation, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';

import getFilter from '../../helpers/icon-filter.helper';
import getHexColor from '../../helpers/hex-color.helper';

interface IFormOptions {
  parent: FormGroup;
  controlName: string;
}

interface IIconOptions {
  src: string;
  side: 'left' | 'right';
}

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements AfterViewInit {
  @Input() id: string;
  @Input() formOptions: IFormOptions;
  @Input() name: string;
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() placeholder: string;
  @Input() minLength: number = 1;
  @Input() maxLength: number = 100;
  @Input() iconOptions: IIconOptions;

  @ViewChild('libInput') libInput: ElementRef;
  @ViewChild('libIcon') libIcon: ElementRef;

  private colors = {
    error: {
      filter: '',
      hex: ''
    },
    success: {
      filter: '',
      hex: ''
    }
  };

  constructor (public readonly element: ElementRef, public readonly renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const errorStyleVariable = '--status-error';
    const successStyleVariable = '--status-success';

    this.colors = {
      error: {
        filter: this.getFilterColor(errorStyleVariable),
        hex: getHexColor(this.element.nativeElement, errorStyleVariable)
      },
      success: {
        filter: this.getFilterColor(successStyleVariable),
        hex: getHexColor(this.element.nativeElement, successStyleVariable)
      }
    };
  }

  private getFilterColor(variable: string): string {
    return getFilter(
      getHexColor(this.element.nativeElement, variable)
    )
  }

  public applyStyles(): void {
    if (this.libInput.nativeElement.validationMessage) {
      this.renderer.setStyle(this.libIcon.nativeElement, 'filter', this.colors.error.filter);
      this.renderer.setStyle(this.libInput.nativeElement, 'border', `0.035rem solid ${this.colors.error.hex}`);
      this.renderer.setStyle(this.libInput.nativeElement, 'color', this.colors.error.hex);
    } else {
      this.renderer.setStyle(this.libIcon.nativeElement, 'filter', this.colors.success.filter);
      this.renderer.setStyle(this.libInput.nativeElement, 'border', `0.035rem solid ${this.colors.success.hex}`);
      this.renderer.setStyle(this.libInput.nativeElement, 'color', this.colors.success.hex);
    }
  }

}
