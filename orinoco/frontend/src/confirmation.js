if (window.location.pathname.indexOf("confirmation.html") != -1)
{
    localStorageOrderParsed = JSON.parse(window.localStorage.order);

    let overallPrice = 0;
    localStorageParsed = JSON.parse(window.localStorage.cart);

    for(i = 0; i < localStorageParsed.length; i++)
    {
        overallPrice +=  localStorageParsed[i].price * localStorageParsed[i].quantity;
    }

    const selectAcknowledgments = document.getElementById("acknowledgments");
    const selectOrderId = document.getElementById("orderId");

    selectAcknowledgments.textContent = "Merci " + localStorageOrderParsed.contact.firstName + " pour votre commande d'un montant de " + overallPrice + " €.";
    selectOrderId.textContent = "Votre identifiant de commande est le " + localStorageOrderParsed.orderId;
}