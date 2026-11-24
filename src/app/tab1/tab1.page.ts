import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  // Etiquetas de la ficha rapida del monstruo
  etiquetas = ['Galicia', 'Samaín', 'Almas en pena', 'Procesión nocturna'];

  // Pequeños datos de la portada
  datos = [
    { icono: 'moon-outline', cifra: '12', pie: 'campanadas antes de verla' },
    { icono: 'flame-outline', cifra: '1', pie: 'cirio por cada ánima' },
    { icono: 'compass-outline', cifra: '∞', pie: 'caminos sin volver' },
  ];

  constructor(private toast: ToastController) {}

  // El componente de la libreria avisa cuando se pulsa su boton
  async alPulsarTarjeta(titulo: string) {
    const aviso = await this.toast.create({
      message: 'Has abierto el expediente: ' + titulo,
      duration: 2200,
      position: 'bottom',
      color: 'secondary',
      icon: 'flame-outline',
    });
    await aviso.present();
  }
}
