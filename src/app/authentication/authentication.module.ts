import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationRoutes } from './authentication.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule, RouterModule.forChild(AuthenticationRoutes)],
})
export class AuthenticationModule {}
