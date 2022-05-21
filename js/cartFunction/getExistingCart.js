export function getExistingCart() {
    const cart = localStorage.getItem("cartlist");
console.log(cart)
    if(cart === null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}