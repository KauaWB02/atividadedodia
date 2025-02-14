import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'activity-form-input',
  templateUrl: './form-input.component.html',
})
export class FormInputComponent implements OnInit {
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() label: string = 'Nome';
  @Input() dataCy: string = 'name';
  @Input() placeHolder: string = 'Adicione seu PlaceHolder na chamado do componente';
  @Input() inputControl!: FormControl;
  @Input() styleClassesForLabel: string = '';
  @Input() styleClassMessageError: string = '';
  @Input() containerInputAndLabel: string = '';
  @Input() errorMessageNextToInput: boolean = false;
  @Input() containerInputAndMessageErro: string = '';

  constructor() {}

  ngOnInit(): void {}

  getContainerInputAndMessageErrorClasses() {
    return {
      [this.containerInputAndMessageErro]: this.containerInputAndMessageErro ? true : false,
      '!flex-row': this.errorMessageNextToInput,
      'items-center': this.errorMessageNextToInput,
    };
  }
}
