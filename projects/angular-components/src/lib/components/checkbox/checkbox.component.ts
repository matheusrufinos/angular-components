import { Component, Input, OnInit } from '@angular/core';

interface ICheckboxOptions {
  controlName: string;
  id: string;
  text: string;
}

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() parent: string;
  @Input() inline: boolean = false;
  @Input() options: ICheckboxOptions[];

  constructor () { }

  ngOnInit(): void {
  }

}
