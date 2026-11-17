<!--
INSTRUCTIONS.md · ¿Qué hacer y qué no hacer?
El criterio de aceptación: las condiciones que tiene que cumplir el resultado
para darlo por bueno. Se escribe ANTES de pedir, no después de ver el resultado.
Regla: si no se puede comprobar mirando el resultado, no es criterio. Es un deseo.
La mitad sale de tu CONTEXT.md (tono, decisiones, lo que falta, hipótesis).
Copia el bloque una vez por petición. Se va ajustando.
-->

# INSTRUCTIONS · Página web personal de Daniel Paladini

## Cómo trabajamos

La web se construye en microloops: un loop por scroll.
No empieza un scroll hasta que el anterior está validado por mí.

Cada loop tiene cuatro pasos, y en cada paso paras y me preguntas:

1. ARRANQUE · Te digo qué scroll toca. Tú me dices qué has entendido y qué datos de CONTEXT.md vas a usar.
2. PROCESO · Me propones tres ideas. Sé disparatado: no te cortes. Yo elijo una (o ninguna).
3. RESULTADO · Construyes solo la idea elegida. Me dices qué archivos has tocado.
4. VERIFICACIÓN · Lo miro en local con el criterio de abajo.
   Si pasa: lo apuntamos en LOG.md y pasamos al siguiente scroll.
   Si no pasa: otra vuelta desde el PROCESO.

## Guía de estilo: TYLE STYLE.png

La imagen TYLE STYLE.png (en la raíz del proyecto) es la ley en diseño de interfaz.
Manda sobre cualquier otra idea de diseño, también sobre las disparatadas.

- Colores: solo cuatro, planos. Rojo #FF0000 · negro #000000 · blanco #FFFFFF · gris #8E8E8E.
  El rojo es el acento: un bloque o un botón por pantalla, no más.
  El gris, solo para etiquetas y botones desactivados (sobre blanco no llega a 4,5:1).
- Fotografía: retrato en blanco y negro, muy contrastado, encuadre cerrado, a sangre.
  Puede llevar texto encima (blanco, muy grande).
- Escala tipográfica: sans serif grotesca, alineada a la izquierda.
  · H1: en mayúsculas, peso regular, el más grande del texto (unas 3,5 veces el párrafo).
  · H2: frase en minúsculas, con las palabras clave en negrita.
  · P: texto corrido con interlineado amplio.
  · Etiquetas: monoespaciada, mayúsculas, pequeña, en gris («ESCALA TIPOGRÁFICA»).
  · Cifra destacada: enorme, en negrita, en blanco sobre la foto («68%»).
- Destacado: bloque rojo con texto blanco en negrita cursiva (una cita y su autor).
  Puede pisar la frontera entre la foto y el texto: es la regla que la guía ya rompe.
- Botones: rectangulares, esquinas rectas, texto en mayúsculas y negrita.
  · Normal: borde negro de 1 px, fondo blanco.
  · Desactivado: borde y texto en gris.
  · Principal: fondo rojo, texto blanco, sin borde.
- Iconos: de línea fina, negros, sin relleno (✓, ✕, menú, flechas).
- Composición: dos columnas, foto a un lado a sangre y texto al otro, con mucho blanco.
Romper una regla (ver criterio común) vale para la composición y el contenido,
nunca para lo que fija esta guía.

## Criterio común (vale para todos los scrolls)

SERÁ BUENO SI:
- Sorprende: la primera vez que lo veo, no me lo esperaba.
- Tiene buen contraste: el texto se lee bien sobre el fondo (mínimo 4,5:1).
- Rompe una regla a propósito, y me dices cuál.

NO SIRVE SI:
- No es coherente con los scrolls ya validados (colores, tipografía, retícula, tono).
- No aporta valor: si lo quito, la página no pierde nada.
- No se puede contextualizar: no hay ningún dato de CONTEXT.md detrás.

LO SABRÉ PORQUE: lo valido yo en cada loop, abriendo index.html en local
y mirando el scroll nuevo junto a los que ya están validados.

## Loop 1 · Primer scroll

QUIERO: la primera pantalla de la landing, la que se ve sin hacer scroll.

SERÁ BUENO SI:
- En un portátil se ve entera sin bajar: mi nombre, qué hago y una forma de contactarme.
- En el móvil (375 px de ancho) se lee bien y no hay scroll horizontal.

## Loop 2 · Segundo scroll

QUIERO: [se define cuando el Loop 1 esté validado].

SERÁ BUENO SI:
- [condición propia de este scroll].
- Continúa el Loop 1 sin repetirlo.

## Loop 3 · Tercer scroll

QUIERO: [se define cuando el Loop 2 esté validado].

SERÁ BUENO SI:
- [condición propia de este scroll].
- Continúa los loops 1 y 2 sin repetirlos.

## Loop 4 · Cuarto scroll

QUIERO: [se define cuando el Loop 3 esté validado].

SERÁ BUENO SI:
- [condición propia de este scroll].
- Cierra la página: después de verlo, sé qué hacer (escribirte, seguirte…).
