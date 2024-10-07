import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from '../../service/darkMode/dark-mode.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'activity-form-input',
  templateUrl: './form-input.component.html',
})
export class FormInputComponent implements OnInit {
  @Input() dataCy!: string;
  @Input() formGroup!: FormGroup;
  @Input() label!: string;
  @Input() inputControl!: FormControl;
  @Input() type!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.inputControl);
    console.log('Testando');
  }
}
