document.addEventListener("DOMContentLoaded", function() {
    // Realiza una solicitud Fetch para cargar datos desde el archivo JSON
    fetch("json/products.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo cargar el archivo JSON.");
        }
        return response.json();
      })
      .then(products => {
      const productsContainer = document.getElementById("products");
  
      products.forEach(producto => {
        const productCard = createProductCard(producto);
        const card = document.createElement("div");
        card.classList.add("product-card");
  
        const carousel = document.createElement("div");
        carousel.classList.add("product-images");
  
        producto.image.forEach(imagen => {
          const img = document.createElement("img");
          img.src = imagen;
          carousel.appendChild(img);
        });
  
        productCard.appendChild(carousel);
        productsContainer.appendChild(productCard);
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
    // Función para crear un elemento de producto en el DOM
    function createProductCard(product) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("span");
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const productLink = document.createElement("a");
        productLink.textContent = "Ver detalles";

        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productLink);

        productLink.addEventListener("click", () => {
          window.location.href = `product.html?id=${product.id}`;
        });

        return productCard;
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