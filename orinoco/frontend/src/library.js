function getCart()
{
    return JSON.parse(localStorage.getItem("cart")) || [];
}
function saveCart(cart)
{
    cartStringified = JSON.stringify(cart);
    window.localStorage.setItem("cart", cartStringified);
}
window.getCart = getCart;
window.saveCart = saveCart;