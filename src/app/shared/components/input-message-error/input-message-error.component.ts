import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import InputMessageErrorInterface from '../../interfaces/input-message-error.interface';

@Component({
  selector: 'activity-input-message-error',
  templateUrl: './input-message-error.component.html',
})
export class InputMessageErrorComponent implements OnInit {
  @Input() error!: InputMessageErrorInterface | null;
  @Input() styleClass: string = '';

  constructor() {}

  ngOnInit(): void {}
}
