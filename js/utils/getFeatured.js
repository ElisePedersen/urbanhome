export function getFeatured(products) {
  const featuredProducts = document.querySelector(".featured__products");

  try {
    products.slice(0, 22).forEach(function (products) {
      const { featured, title, price, image_url } = products.attributes;
      if (featured) {
        featuredProducts.innerHTML += `<a href="product-specific.html?id=${products.id}" class="card-group product__card">
                                          <div class="card product__body">
                                            <div class="card-body card__body">
                                              <img src=${image_url} class="product__image"></img>
                                              <p class="card-title card__title">${title}</p>
                                              <p>$${price}</p>
                                            </div> 
                                          </div>
                                        </a>`;
      } else {
        featuredProducts.innerHTML += "";
      }
    });
  } catch (error) {
    console.log(error);
    featuredProducts.innerHTML = "<p>An error occurred</p>";
  }
}
