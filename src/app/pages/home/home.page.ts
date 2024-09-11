import { Component, OnInit } from '@angular/core';
import { Menulink } from 'src/app/interfaces/menulink';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


links:Menulink[]=[{
  link:"/botones",
  icono:"radio-button-on-outline",
  label:"botones"
},

// aqui se repite segun pagina 


]


  constructor() { }

  ngOnInit() {
  }

}
