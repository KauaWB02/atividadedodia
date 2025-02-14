import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'activity-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() iconPossition: 'PREFIX' | 'SUFFIX' = 'PREFIX';
  @Input() activateIcon: boolean = false;
  @Input() loadingClass: string = '';
  @Input() buttonLabel: string = 'Adicione um nome para o botão';
  @Input() buttonClass: string = '';
  @Input() typeButton: string = 'button';
  @Input() labelClass: string = '';
  @Input() iconLabel: string = 'favorite';
  @Input() iconClass: string = '';
  @Input() loading: boolean = false;
  @Input() dataCy: string = 'Adicone um dataCy para o botão';
  @Input() disable: boolean = true;

  @Output() emitClickEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  eventClick(): void {
    this.emitClickEvent.emit(true);
  }

  getButtonClasses() {
    return {
      [this.buttonClass]: this.buttonClass ? true : false,
      'flex-row': this.activateIcon && this.iconPossition === 'PREFIX',
      'flex-row-reverse': this.activateIcon && this.iconPossition === 'SUFFIX',
      'cursor-wait': this.loading,
      'cursor-not-allowed': this.disable,
    };
  }
}
