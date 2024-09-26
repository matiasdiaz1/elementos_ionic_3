import { Component } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-serviciopro',
  templateUrl: './serviciopro.page.html',
  styleUrls: ['./serviciopro.page.scss'],
})
export class ServicioproPage {

  qrCodeUrl: string = '';

  constructor() { }

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
}

