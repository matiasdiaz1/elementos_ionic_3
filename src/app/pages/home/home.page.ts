import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/i_usuario';
import { LocaldbService } from 'src/app/services/almacenamiento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
  }

  constructor(
    private db: LocaldbService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  logear() {
    console.log("Logear");
    let buscado = this.db.get(this.user.username);
    buscado.then(datos => {
      if (datos !== null) {
        if (this.user.username === datos.username && this.user.password === datos.password) {
          this.router.navigate(['/dashboard']); // Redirige a una página de bienvenida o dashboard
        } else {
          this.presentToast('top');
        }
      } else {
        console.log('Usuario no encontrado');
        this.presentToast('top');
      }
    });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      header: 'Error',
      message: 'El usuario y/o contraseña son incorrectos',
      color: 'dark',
      cssClass: 'toastext',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
}
