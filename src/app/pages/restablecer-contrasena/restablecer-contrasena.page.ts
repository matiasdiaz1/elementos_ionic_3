import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage implements OnInit {
  email: string = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  restablecerContrasena() {
    // Lógica para restablecer la contraseña
    console.log(`Restablecer contraseña para: ${this.email}`);
    this.mostrarAlertaConfirmacion();
  }

  async mostrarAlertaConfirmacion() {
    const alert = await this.alertController.create({
      header: "Solicitud Enviada",
      message: "Si el correo electrónico está registrado, recibirás un enlace para restablecer tu contraseña.",
      buttons: ['OK']
    });

    await alert.present();
  }
}
