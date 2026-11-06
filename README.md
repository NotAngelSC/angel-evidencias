# Angel Soto Trejo — Portafolio de trayectoria

Sitio estático para GitHub Pages. HTML, CSS y JavaScript sin instalación, compilación ni servicios externos. La identidad visual utiliza los colores de NCtrl: verde `#184f47`, marfil `#f3efe4` y terracota `#bb644a`.

## Publicar en GitHub Pages

1. Sube **el contenido de esta carpeta** a la raíz del repositorio de GitHub elegido. `index.html` debe quedar en la raíz.
2. En **Settings → Pages → Build and deployment**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta **/(root)**. Guarda.
4. Espera el despliegue de GitHub Pages. Para `NotAngelSC/angel-evidencias`, la dirección prevista es `https://notangelsc.github.io/angel-evidencias/`.

La dirección anterior es la esperada para esa combinación de cuenta/repositorio, no una confirmación de publicación. No requiere dominio propio ni activa servicios de pago.

## Estructura

- `index.html`: textos, proyectos, reconocimientos y enlaces.
- `assets/styles.css`: diseño adaptable y estilos de impresión.
- `assets/app.js`: menú móvil, navegación, animaciones al desplazarse y visor de evidencia.
- `assets/images/`: fotografías y constancias optimizadas en WebP, sin metadatos EXIF.
- `assets/cv/Angel_Soto_Trejo_CV.pdf`: CV descargable.
- `assets/cv/Angel_Soto_Trejo_CV.html`: CV en HTML.
- `.nojekyll`: publicación directa de los archivos.

## Editar

Los textos se editan directamente en `index.html`. NeuroTAP se identifica por `id="neurotap-description"` para facilitar actualizaciones. Añade fotografías como enlaces `a.evidence-link` y un atributo `data-caption` con su descripción. El visor ampliado se activa automáticamente; sin JavaScript el enlace abre la imagen.

Se respetan las preferencias de movimiento reducido. Los textos y enlaces principales son visibles sin JavaScript. Las constancias adicionales usan un elemento nativo `details`; las imágenes se abren en un diálogo con navegación por teclado y cierre con Escape.

## Evidencia y alcance

- Primer lugar en InnovaTecNM: **fase local**, categoría Robots Manipuladores para la Industria.
- Rally Latinoamericano 2025: primer lugar **regional** en Innovación, equipo Leakova; sede Instituto Tecnológico de Celaya. No se presenta como triunfo nacional ni como ganador general latinoamericano.
- Las constancias conservadas son imágenes de las vistas previas suministradas; no se presentan como PDF originales ni se enlazan archivos ausentes.
- NCtrl se describe como prototipo; la recuperación visual es experimental. No se atribuyen métricas de validación industrial.
- NeuroTAP se describe a partir del artículo proporcionado: captura móvil de voz, sensores inerciales y pantalla táctil para investigación en tamizaje de Parkinson. No se presenta como diagnóstico validado, producto clínico ni modelo predictivo ya implementado.
- La ponencia de C# y .NET de 2024 fue retirada.
- El sitio muestra ciudad y estado, sin domicilio particular.

## Vista local

Puedes abrir `index.html` directamente en un navegador. Para servir la carpeta por HTTP, ejecuta `python -m http.server 8765` dentro de esta carpeta y abre `http://127.0.0.1:8765`. Este comando requiere Python instalado.

No se utilizan cookies, analítica, formularios de captura, fuentes remotas ni bibliotecas de terceros.
