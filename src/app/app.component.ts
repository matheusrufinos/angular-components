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
  items = [
    {
      image: 'https://miro.medium.com/max/10368/1*o8tTGo3vsocTKnCUyz0wHA.jpeg',
      title: 'Lorem Ipsum 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi quam, condimentum eu fermentum in, pellentesque a odio. Vivamus eleifend nisi at risus interdum, id scelerisque nisi convallis.'
    },
    {
      image: 'https://image.freepik.com/free-photo/two-halves-orange-round-orange-dark-blue-background-from-boards-painted-blue-trend-color_116441-8548.jpg',
      title: 'Lorem Ipsum 2',
      description: 'Vivamus congue sapien non nisi vehicula aliquam. Sed non tellus blandit, feugiat urna nec, dictum ante. Nullam interdum, odio ac maximus ornare, justo lectus aliquam mi, faucibus lacinia quam diam eu ligula. '
    },
    {
      image: 'https://cdn.nohat.cc/thumb/f/720/4735188626046976.jpg',
      title: 'Lorem Ipsum 3',
      description: 'Vivamus ultricies luctus ligula, at fringilla quam fringilla eu. Donec semper tincidunt justo, at finibus tellus malesuada sit amet. Vivamus ultrices molestie ex, et volutpat ex rutrum sed. Praesent semper, ipsum id rhoncus maximus, tellus ligula dictum purus, quis convallis dolor sapien non ligula.'
    },
    {
      image: 'https://c0.wallpaperflare.com/preview/250/418/418/blue-citrus-fruit-lemon.jpg',
      title: 'Lorem Ipsum 4',
      description: 'Vivamus dignissim purus in convallis rutrum. Ut ornare gravida nibh, eu sodales odio commodo id.'
    },
  ];
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
  ];

  constructor (
    readonly formBuilder: FormBuilder,
    readonly modalService: ModalService,
  ) {
    this.inputForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      option: ['', [Validators.required]],
      friendIndication: [false],
      mediaCampaignIndication: [false],
      searchConsoleIndication: [false]
    });
  }

  openModal(id: string): void {
    this.modalService.open(id);
  }
}
