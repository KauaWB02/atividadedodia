import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'activity-form-input',
  templateUrl: './form-input.component.html',
})
export class FormInputComponent implements OnInit {
  @Input() id: string = 'name';
  @Input() type: string = 'text';
  @Input() label: string = 'Nome';
  @Input() dataCy: string = 'name';
  @Input() formGroup!: FormGroup;
  @Input() placeHolder: string =
    'Adicione seu PlaceHolder na chamado do componente';
  @Input() inputControl!: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
