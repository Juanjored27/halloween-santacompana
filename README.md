# halloween-santacompana

App de la colección de Halloween del estudio, dedicada a **La Santa Compaña**.
Hecha con **Ionic Framework + Angular** (plantilla de pestañas) y usando un
componente propio empaquetado en la librería **halloween-ui**.

---

## 1. Qué hay en el repositorio

```
halloween-santacompana/
├── projects/halloween-ui/        <- la librería de componentes (CE 3b)
│   ├── src/lib/monster-card/     <- el componente MonsterCardComponent
│   └── package.json              <- name, version 1.0.0, author, peerDependencies
├── paquete/halloween-ui-1.0.0.tgz<- el paquete generado con npm pack (CE 3g)
├── src/app/tabs/                 <- las tres pestañas
├── src/app/tab1/                 <- Inicio  (usa el componente)
├── src/app/tab2/                 <- Historia (usa el componente)
├── src/app/tab3/                 <- Galería
├── src/assets/img/               <- ilustraciones SVG propias
└── README.md
```

## 2. Instalar y arrancar

```bash
npm install
npm run build:lib
npm start
```

El `tsconfig.json` tiene este mapeo, que es lo que hace que funcione el
`import { MonsterCardComponent } from 'halloween-ui'`:

```json
"paths": {
  "halloween-ui": ["./dist/halloween-ui"]
}
```

> Si `ng build halloween-ui` da error de `ng-packagr`, instala la dependencia:
> `npm install -D ng-packagr`

## 3. Compilar la librería y generar el paquete (CE 3g)

```bash
ng build halloween-ui
cd dist/halloween-ui
npm pack
```

Esto genera `halloween-ui-1.0.0.tgz`. En el repositorio está copiado dentro de
la carpeta `paquete/`.

## 4. Subir a GitHub

```bash
git init
git add .
git commit -m "App La Santa Compaña con libreria halloween-ui"
git branch -M main
git remote add origin <URL-de-tu-repositorio>
git push -u origin main
```

Antes de subir, el `.gitignore` ya deja fuera `node_modules/` y `dist/`.
La carpeta `paquete/` **sí** se sube, para que el `.tgz` quede en el repo.
También se puede subir como *release* en GitHub.

**Enlace al repositorio:** pendiente de crear y completar con la URL real de GitHub.

---

## 5. Capturas que hay que hacer para el informe

### CE 3b – El componente
1. El código de `projects/halloween-ui/src/lib/monster-card/monster-card.ts`
   (se ven los `@Input()` y el `@Output()`).
2. El código de `monster-card.html` y `monster-card.scss`.
3. Una captura de la tarjeta ya colocada en la app (Inicio).

### CE 3g – Compilación y empaquetado
4. La terminal con `ng build halloween-ui` terminado correctamente.
5. La terminal con `npm pack` y la línea donde aparece `halloween-ui-1.0.0.tgz`.
6. La carpeta `dist/halloween-ui` abierta, con el `.tgz` dentro.
7. El `package.json` de la librería con name, version, description, author y
   peerDependencies.

### CE 3h – Uso en la app
8. La pestaña **Inicio** con la tarjeta.
9. La pestaña **Historia** con las cuatro tarjetas de poderes y debilidades.
10. El código de `tab1.module.ts` y `tab2.module.ts` donde se ve el
    `import { MonsterCardComponent } from 'halloween-ui'`.
11. El código de `tab1.page.html` y `tab2.page.html` con los `[imagen]`,
    `[titulo]` y `[texto]` cambiados.

---

## 6. Decisiones de diseño del componente

La tarjeta está hecha a mano, sin `ion-card`, para que parezca un objeto de la
propia app y no un componente genérico. Usé un marco con esquinas doradas que
recuerda a los cirios de la procesión, y un borde degradado de naranja a rojo
sangre para dar sensación de calor y de peligro. La imagen va arriba con un velo
oscuro abajo, así el título siempre se lee bien encima de cualquier ilustración.
Los títulos van en una tipografía decorativa y el texto en una serif legible,
buscando el contraste entre lo antiguo y lo que se puede leer de noche. Al pulsar
la tarjeta se hunde un poco y el botón se ilumina, como si se avivara una llama.
Por último, la silueta de un ánima encapuchada de fondo y el brillo que respira
despacio dan el aire tenebroso sin cargar la pantalla.
