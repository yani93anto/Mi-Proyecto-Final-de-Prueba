document.addEventListener("DOMContentLoaded", () => {
  // Obtén el ID del producto de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");
  
  // Obtiene los datos de productos del almacenamiento local
  const products = JSON.parse(localStorage.getItem("products"));
  
  // Busca el producto por ID
  const producto = products.find(producto => producto.id == idProducto);

  if (producto) {
    // Muestra los detalles del producto en la página
    const productoContenedor = document.querySelector(".producto_contenedor");
    productoContenedor.innerHTML = `
        <h2>${producto.name}</h2>
        <img src="${producto.image[0]}" alt="${producto.name}">
        <p>Precio: $${producto.price.toFixed(2)}</p>
        <p>Envío Gratis</p>
        <p>Calificación: ${producto.score}</p>
        <p>${producto.detail}</p>
    `;
} else {
    console.log("El producto con ese ID no fue encontrado");
}
});
  

/* Dark Mode */
// Obtén una referencia al botón "Modo Oscuro"
var boton = document.getElementById('boton');

// Obtén una referencia al cuerpo de la página
var body = document.body;

// Agrega un listener al botón para cambiar el modo
boton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');// Muestra una confirmación
})

function cambioDeModo() {
    const boton = document.getElementById('boton');
    const body = document.body;
  
    if (body.classList.contains('modo-oscuro')) {
      // Cambia a modo claro
      body.classList.remove('modo-oscuro');
      boton.innerText = 'Modo Oscuro';
    } else {
      // Cambia a modo oscuro
      body.classList.add('modo-oscuro');
      boton.innerText = 'Modo Claro';
    }
  }