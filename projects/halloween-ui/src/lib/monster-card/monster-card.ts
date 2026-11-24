import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hallow-monster-card',
  standalone: true,
  templateUrl: './monster-card.html',
  styleUrls: ['./monster-card.scss'],
})
export class MonsterCardComponent {
  // Imagen que se ve arriba (una ruta o una URL)
  @Input() imagen = '';

  // Titulo de la tarjeta
  @Input() titulo = '';

  // Texto largo de la tarjeta
  @Input() texto = '';

  // Etiqueta pequena y opcional: "Poder", "Debilidad", "Leyenda"...
  @Input() etiqueta = '';

  // Texto del boton
  @Input() botonTexto = 'Abrir el expediente';

  // Avisa a la pagina cuando se pulsa el boton
  @Output() accion = new EventEmitter<string>();

  pulsar(): void {
    this.accion.emit(this.titulo);
  }
}
