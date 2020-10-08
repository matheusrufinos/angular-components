import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  readonly element: any;

  constructor (readonly modalService: ModalService, readonly el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an unique id');
      return;
    }

    document.body.appendChild(this.element);
    this.modalService.add(this);
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
}
