export function productsToEdit(productsToRender) {
  const productContainer = document.querySelector(".product__container");
  productContainer.innerHTML = "";

  try {
    productsToRender.forEach(function (product) {
      console.log(product);
      const { title, price } = product.attributes;
      productContainer.innerHTML += `<a href="edit.html?id=${product.id}" class="card-group">
            <div class="card h-100">
                <div class="card-body">
                    <p class="card-title card__title">${title}</p>
                    <p>$${price}</p>
                </div>
            </div>
        </a>`;
    });
  } catch (error) {
    console.log(error);
  }
}
