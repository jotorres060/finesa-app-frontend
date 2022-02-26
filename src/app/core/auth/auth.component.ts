import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.frmLogin.invalid) {
      this.frmLogin.markAllAsTouched();
      return;
    }

    console.log( this.frmLogin.value );

    // this._residentes.crear(this.frmLogin.value)
    //   .subscribe(() => {
    //     this.message.mostrarMensaje('success', 'Residente creado exitosamente!');
    //     this.ocultarFrmCrear();
    //   });
  }

}
