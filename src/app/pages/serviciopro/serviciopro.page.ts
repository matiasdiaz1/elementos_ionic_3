import { Component } from '@angular/core';
import * as QRCode from 'qrcode';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-serviciopro',
  templateUrl: './serviciopro.page.html',
  styleUrls: ['./serviciopro.page.scss'],
})
export class ServicioproPage {

  qrCodeUrl: string = '';
  mostrarListaAlumnos: boolean = false;
  alumnos: string[] = ['Juan Pérez', 'María López', 'Carlos García', 'Ana Martínez'];

  constructor(private router: Router, private menu: MenuController) { }

  generateQRCode() {
    const url = 'https://www.youtube.com/watch?v=f_WuRfuMXQw&ab_channel=SheeshBruh'; // URL del video de YouTube
    QRCode.toDataURL(url, { errorCorrectionLevel: 'H' }, (err, qrCodeUrl) => {
      if (err) {
        console.error(err);
        return;
      }
      this.qrCodeUrl = qrCodeUrl;
    });
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/home']);
  }

  openProfileMenu() {
    this.menu.open('profile-menu');
  }

  toggleListaAlumnos() {
    this.mostrarListaAlumnos = !this.mostrarListaAlumnos;
  }
}
