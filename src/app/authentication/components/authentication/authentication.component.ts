import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateRequired } from '../../../shared/validators/raquired.validator';
import { ValidateEmail } from '../../../shared/validators/email.validator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'activity-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnInit {
  private mock = {
    email: 'adm@gmail.com',
    password: '1234',
  };

  public loading: boolean = false;
  public show: boolean = false;
  public type: string = 'password';
  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [ValidateRequired, ValidateEmail]),
    password: new FormControl(null, [ValidateRequired]),
  });

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly route: Router) {}

  ngOnInit(): void {}

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

  login(event: boolean): void {
    if (event) {
      this.loading = true;

      setTimeout(() => {
        if (this.email.value === this.mock.email && this.password.value === this.mock.password) {
          this.route.navigate(['atividades'])
          this.loading = false;
        }
        this.loading = true;
      }, 100);
    }
  }
}
