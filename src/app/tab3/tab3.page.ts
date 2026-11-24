import { Component } from '@angular/core';

// Cada lugar de la galeria con su frase
interface Lugar {
  imagen: string;
  titulo: string;
  frase: string;
  lugar: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  lugares: Lugar[] = [
    {
      imagen: 'assets/img/cruceiro.svg',
      titulo: 'El cruceiro',
      lugar: 'Encrucillada del monte',
      frase: '«De noche los santos de piedra giran la cara para no verlas pasar.»',
    },
    {
      imagen: 'assets/img/campana.svg',
      titulo: 'La campana muda',
      lugar: 'Campanario',
      frase: '«Tocó una vez a muerto. Desde entonces nadie sube al campanario.»',
    },
    {
      imagen: 'assets/img/camino.svg',
      titulo: 'La encrucillada',
      lugar: 'Cruce de caminos',
      frase: '«En el cruce de los caminos se paran las almas: no saben por cuál volver.»',
    },
    {
      imagen: 'assets/img/calacu.svg',
      titulo: 'El calacú',
      lugar: 'Umbral de la casa',
      frase: '«Una vela dentro de una calabaza no ilumina: avisa de que estás en casa.»',
    },
  ];

  // Pasos del ritual de proteccion
  pasos = [
    'No salgas al camino después de la última campanada.',
    'Si la ves, túmbate boca abajo y no la mires a la cara.',
    'Dibuja un círculo en la tierra y una cruz dentro.',
    'Reza en voz baja hasta que el gallo cante.',
  ];
}
