document.addEventListener("DOMContentLoaded", function() {
  // Obtener el contenedor de productos
  const productsContainer = document.getElementById("products");

    // Realiza una solicitud Fetch para cargar datos desde el archivo JSON
    fetch("json/products.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo cargar el archivo JSON.");
        }
        return response.json();
      })
      .then(products => {
  
      products.forEach(producto => {
        // Crear el contenedor del producto
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // Crear el título h3
        const productName = document.createElement("h3");
        productName.textContent = producto.name;
  
        // Crear el carrusel de imágenes
        const carousel = document.createElement("div");
        carousel.classList.add("product-images");
  
        producto.image.forEach(imagen => {
          const img = document.createElement("img");
          img.src = imagen;
          carousel.appendChild(img);
        });

        const productPrice = document.createElement("span");
        productPrice.textContent = `$${producto.price.toFixed(2)}`;

        const productLink = document.createElement("a");
        productLink.textContent = "Ver detalles";
  
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(carousel);
        productCard.appendChild(productLink);
        productsContainer.appendChild(productCard);

        productLink.addEventListener("click", () => {
          window.location.href = `product.html?id=${producto.id}`;
        });

        return productCard;
      });
  
      // Inicializa Slick Carousel
      $('.product-images').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000 // Velocidad de reproducción automática en milisegundos
    });
})
.catch(error => {
  console.error(error);
})

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