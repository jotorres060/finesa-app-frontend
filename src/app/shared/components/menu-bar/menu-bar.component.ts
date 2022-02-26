import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor(
    private _auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-list',
        routerLink: '/products'
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-fw pi-sign-out',
        command: () => {
          this._auth.logout()
            .subscribe((_) => {
              this.router.navigateByUrl('/login');
            }, (err) => alert('Error interno.'));
        }
      }
    ];
  }

}
