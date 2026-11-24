import { Component } from '@angular/core';

// Una ficha de la seccion: imagen, titulo, texto y etiqueta
interface Ficha {
  imagen: string;
  etiqueta: string;
  titulo: string;
  texto: string;
  boton: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // Poderes y debilidades de la Santa Compaña
  poderes: Ficha[] = [
    {
      imagen: 'assets/img/cirio.svg',
      etiqueta: 'Poder',
      titulo: 'El olor a cera',
      texto:
        'No se la ve venir: se la huele. Un rastro de cera caliente y de tierra recién removida ' +
        'recorre la calle antes de que aparezca. Cuando el olor llega a tu puerta, ya es tarde.',
      boton: 'Leer más',
    },
    {
      imagen: 'assets/img/campana.svg',
      etiqueta: 'Poder',
      titulo: 'El toque de las doce',
      texto:
        'Solo camina entre medianoche y la primera luz. Si suenan las campanas y nadie las toca, ' +
        'la comitiva ya ha salido y los perros del pueblo se han quedado mudos.',
      boton: 'Leer más',
    },
    {
      imagen: 'assets/img/camino.svg',
      etiqueta: 'Debilidad',
      titulo: 'La raya en el suelo',
      texto:
        'Se dice que basta con dibujar un círculo en la tierra y una cruz dentro, tumbarse boca abajo ' +
        'y esperar. La procesión pasa de largo, pero no puedes levantar la vista ni un momento.',
      boton: 'Leer más',
    },
    {
      imagen: 'assets/img/cruceiro.svg',
      etiqueta: 'Debilidad',
      titulo: 'El canto del gallo',
      texto:
        'Antes de amanecer tiene que volver al cementerio. Si el gallo canta y aún está en el camino, ' +
        'se deshace como la niebla y las ánimas regresan a sus tumbas.',
      boton: 'Leer más',
    },
  ];

  // Curiosidades de Halloween y de la tradicion gallega
  curiosidades: string[] = [
    'En Galicia la noche del 31 de octubre se llama Samaín, y es la fiesta en la que los muertos vuelven a casa.',
    'Antes de las calabazas se vaciaban nabos y calacús, se les tallaba una cara y se les metía una vela dentro.',
    'También se la conoce como Estadea, Güestia o Hueste: cada comarca le pone su nombre.',
    'El que va delante no es un muerto, es un vivo condenado a guiar la procesión hasta que otro ocupe su sitio.',
    'Los vecinos cierran puertas y ventanas y no responden si alguien llama a esas horas.',
  ];

  // Texto del aviso cuando se pulsa una tarjeta
  fichaAbierta = '';

  abrirFicha(titulo: string) {
    this.fichaAbierta = titulo;
  }
}
