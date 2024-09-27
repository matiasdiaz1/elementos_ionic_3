import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-servicioalum',
  templateUrl: './servicioalum.page.html',
  styleUrls: ['./servicioalum.page.scss'],
})
export class ServicioalumPage {

  constructor(
    private router: Router,
    private menu: MenuController
  ) { }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/home']);
  }

  openProfileMenu() {
    this.menu.open('profile-menu-alum');
  }

  async activarCamara() {
    try {
      
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        
        BarcodeScanner.hideBackground();

       
        const result = await BarcodeScanner.startScan();


        if (result.hasContent) {
          console.log('Código QR escaneado:', result.content);

        }
      } else {
        console.error('Permiso de cámara no concedido');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error al escanear el código QR:', error.message);
      } else {
        console.error('Error desconocido:', error);
      }
    }
  }
}