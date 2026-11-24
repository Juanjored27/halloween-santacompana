# halloween-ui

Libreria de componentes del estudio, con ambientacion de Halloween.

## Componente: MonsterCardComponent

Selector: `hallow-monster-card`

### Entradas (@Input)

| Input | Tipo | Descripcion |
|-------|------|-------------|
| `imagen` | string | Ruta o URL de la imagen de la tarjeta |
| `titulo` | string | Titulo del monstruo o del contenido |
| `texto` | string | Texto descriptivo |
| `etiqueta` | string | Etiqueta pequena opcional (Poder, Debilidad...) |
| `botonTexto` | string | Texto del boton |

### Salida (@Output)

| Output | Tipo | Descripcion |
|--------|------|-------------|
| `accion` | EventEmitter<string> | Se emite al pulsar el boton y devuelve el titulo |

## Uso

```html
<hallow-monster-card
  imagen="assets/img/cirio.svg"
  titulo="El aviso de los cirios"
  texto="Antes de verlos se escuchan las luces."
  etiqueta="Poder"
  botonTexto="Encender el cirio"
  (accion)="hacerAlgo($event)">
</hallow-monster-card>
```

## Compilar y empaquetar

```bash
ng build halloween-ui
cd dist/halloween-ui && npm pack
```
