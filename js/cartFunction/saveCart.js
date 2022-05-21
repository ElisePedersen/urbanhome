export function saveCart(cart) {
    localStorage.setItem("cartlist", JSON.stringify(cart));
}