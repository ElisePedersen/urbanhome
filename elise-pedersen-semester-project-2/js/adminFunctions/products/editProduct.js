export function productsToEdit(productsToRender){
    const productContainer = document.querySelector(".product__container");
    productContainer.innerHTML = "";

    try {
        productsToRender.forEach(function(product) {
            console.log(product)
            productContainer.innerHTML += `<a href="edit.html?id=${product.id}" class="card-group">
            <div class="card h-100">
                <img src="${product.image.url}" class="card-img-top h-100" alt="...">
                <div class="card-body">
                    <p class="card-title card__title">${product.title}</p>
                    <p>$${product.price}</p>
                </div>
            </div>
        </a>`;
        })     
           
    }
    catch(error) {
        console.log(error)
       
    }

    
}