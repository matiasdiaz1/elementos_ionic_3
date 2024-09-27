import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-seccionalum',
  templateUrl: './seccionalum.page.html',
  styleUrls: ['./seccionalum.page.scss'],
})
export class SeccionalumPage implements OnInit {
  nombreUsuario: string = 'Usuario';

  secciones: string[] = [
    'Sección 1',
    'Sección 2',
    'Sección 3',
    'Sección 4',
    'Sección 5'
  ];

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.obtenerNombreUsuario();
  }

  obtenerNombreUsuario() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const user = JSON.parse(usuario);
      this.nombreUsuario = user.username;
    }
  }

  seleccionarSeccion(seccion: string) {
    console.log(`Seleccionaste: ${seccion}`);
    this.router.navigate(['/servicioalum']);
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/home']);
  }

  openProfileMenu() {
    this.menu.open('profile-menu-secciones');
  }
}