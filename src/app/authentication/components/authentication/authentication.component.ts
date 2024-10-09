import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'activity-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(),
  });
  public show: boolean = false;
  public type: string = 'password';

  ngOnInit(): void {
    console.log('Testando');
  }

  public showPassword() {
    this.show = !this.show;
    this.type = this.show ? 'text' : 'password';
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
