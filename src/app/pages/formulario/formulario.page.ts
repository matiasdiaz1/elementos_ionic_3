import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioLog } from 'src/app/interfaces/i_usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  usuario: UsuarioLog = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  iniciar_sesion() {
    if (this.usuario.username === "profesor1" && this.usuario.password === "prof123") {
      this.router.navigate(["/home-profesor"]);
    } else if (this.usuario.username === "alumno1" && this.usuario.password === "alum123") {
      this.router.navigate(["/home-alumno"]);
    } else {
      this.alertaAccesoDenegado();
    }
  }

  async alertaAccesoDenegado() {
    const alert = await this.alertController.create({
      header: "Acceso Denegado",
      subHeader: "Nombre de usuario o contraseña incorrectos",
      message: "Por favor, verifica tus credenciales e intenta nuevamente.",
      cssClass: 'alerta-acceso-denegado',
      buttons: [{
        text: "Reintentar",
        cssClass: 'btn-reintentar',
        handler: () => {
          // Acción al presionar "Reintentar"
        }
      }],
    });

    await alert.present();
  }
}
