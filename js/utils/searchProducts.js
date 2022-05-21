import { getProducts } from "./getProducts.js";

export function searchProducts(products) {
    const search = document.querySelector(".filter__products");

    search.onkeyup = function(e) {
        const searchValue = e.target.value.trim().toLowerCase();


        const filteredProducts = products.filter(function (product) {
            if (product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)) {
                return true;
            } 
            
        });

        getProducts(filteredProducts);
        console.log(filteredProducts)

    };
    
}
