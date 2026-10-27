const boton = document.querySelector('#boton');
const texto = document.querySelector('#texto');

boton.addEventListener('click', () => {
  texto.hidden = !texto.hidden;
});
