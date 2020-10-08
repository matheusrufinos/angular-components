import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface IRadioOptions {
  id: string;
  text: string;
  value: string;
}

@Component({
  selector: 'lib-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() controlName: string;
  @Input() inline: boolean = false;
  @Input() parent: FormGroup;
  @Input() options: IRadioOptions[];
  constructor () { }

  ngOnInit(): void {
  }

}
