const boton = document.querySelector('#boton');
const llista = document.querySelector('#llista');

boton.addEventListener('click', () => {
  llista.hidden = !llista.hidden;

  // El texto del botón cambia según si la lista se ve o no
  if (llista.hidden) {
    boton.textContent = 'Mostra els ponents';
  } else {
    boton.textContent = 'Amaga els ponents';
  }
});
