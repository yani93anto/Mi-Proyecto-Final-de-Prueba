document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;

    buyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const price = parseFloat(button.getAttribute("data-price"));
            total += price;
            cartTotal.textContent = total.toFixed(2);

            const productName = button.parentElement.querySelector("h2").textContent;
            const listItem = document.createElement("li");
            listItem.textContent = productName;
            cartItems.appendChild(listItem);

            // Puedes agregar más lógica aquí, como actualizar un carrito en el servidor, mostrar notificaciones, etc.
        });
    });
});
