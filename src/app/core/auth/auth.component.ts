import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public isLoading: boolean = false;
  public frmLogin: FormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.maxLength(250),
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.maxLength(250)
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  public onSubmit(): void {
    if (this.frmLogin.invalid) {
      this.frmLogin.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this._auth.login(this.frmLogin.value)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe((data) => {
        this.storeData(data);
        this.router.navigateByUrl('/');
      }, (err) => {
        const message = err.error.data;
        alert(message);
      });
  }

  private storeData(data: any): void {
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.user.id);
  }

}
