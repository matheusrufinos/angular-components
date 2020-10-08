import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'projects/angular-components/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputForm: FormGroup;

  checkboxOptions = [
    {
      controlName: 'friendIndication',
      id: 'friendInd',
      text: 'Friend Indication',
    },
    {
      controlName: 'mediaCampaignIndication',
      id: 'mediaInd',
      text: 'TV or Social Media Advertising',
    },
    {
      controlName: 'searchConsoleIndication',
      id: 'searchInd',
      text: 'Google, Bing or another Search Engine',
    },
  ];

  radioOptions = [
    {
      id: 'inbox',
      text: 'Inbox',
      value: 'inbox',
    },
    {
      id: 'outbox',
      text: 'Outbox',
      value: 'outbox',
    },
    {
      id: 'other',
      text: 'Other',
      value: 'other',
    },
  ]

  constructor(
    readonly formBuilder: FormBuilder,
    readonly modalService: ModalService,
  ){
    this.inputForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      option: ['', [Validators.required]],
      friendIndication: [false],
      mediaCampaignIndication: [false],
      searchConsoleIndication: [false]
    });
  }

  openModal(id: string):void {
    this.modalService.open(id);
  }
}
