import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AngularFireAuthModule]
})
export class AuthModule {}
