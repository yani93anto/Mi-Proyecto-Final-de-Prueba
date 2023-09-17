document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");

    // Cargar productos desde JSON usando Fetch API
    fetch("json/products.json")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = createProductCard(product);
                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error al cargar productos: " + error));

    // Función para crear un elemento de producto en el DOM
    function createProductCard(product) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("span");
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        const productLink = document.createElement("a");
        productLink.textContent = "Ver detalles";
        productLink.href = product.html;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productLink);

        return productCard;
    }
});
// DARK MODE
var modoBoton = document.getElementById('modoBoton');
var body = document.body;

// Agrega un listener al botón para cambiar el modo
modoBoton.addEventListener('click', function() {
    // Alternar la clase "dark-mode" en el elemento body
    body.classList.toggle('dark-mode');
});
