import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-servicioalum',
  templateUrl: './servicioalum.page.html',
  styleUrls: ['./servicioalum.page.scss'],
})
export class ServicioalumPage {

  constructor(private router: Router, private menu: MenuController) { }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/home']);
  }

  openProfileMenu() {
    this.menu.open('profile-menu-alum');
  }
}
