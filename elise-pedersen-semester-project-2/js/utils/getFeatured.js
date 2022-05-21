export function getFeatured(products){
    const featuredProducts = document.querySelector(".featured__products");

    try {
        for (let i = 0; i < products.length; i++) {
            if (products[i].featured) {
                console.log(products)
                featuredProducts.innerHTML += `<a href="product-specific.html?id=${products[i].id}" class="card-group product__card">
                                                    <div class="card product__body">
                                                        <img src="${products[i].image.url}" class="card-img-top" alt="${products[i].image.alternativeText}">
                                                        <div class="card-body card__body">
                                                            <p class="card-title card__title">${products[i].title}</p>
                                                            <p>$${products[i].price}</p>
                                                        </div> 
                                                    </div>
                                                </a>`;
                console.log(products[i].featured)
            } 
            else {
                featuredProducts.innerHTML += "";
        }  
    }
    }catch(error) {
        console.log(error)
        featuredProducts.innerHTML = '<p>An error occurred</p>'
    }
}


