if (window.location.pathname.indexOf("commande.html") != -1)
{
    /*On récupère les données de cart sous forme de tableau depuis localStorage*/
    localStorageCartParsed = JSON.parse(window.localStorage.cart);

    /*On créer le constructor de l'objet order*/
    class order
    {
        constructor(contact, products)
        {
            this.contact = contact;
            this.products = products;
        }
    }

    /* Récupère le prix de tout les produits et on les additionne puis on les affiche */
    let overallPrice = 0;
    localStorageParsed = JSON.parse(window.localStorage.cart);

    for(i = 0; i < localStorageParsed.length; i++)
    {
        overallPrice +=  localStorageParsed[i].price;
    }

    const selectAmount = document.querySelector(".main__total");
    selectAmount.textContent = "Le montant de votre panier est de " + overallPrice + "€";

    /* On envoie à la validation du formulaire les données sur localstorage et au serveur*/
    const selectclientInformation = document.getElementById("clientInformation");

    selectclientInformation.addEventListener
    (
        "submit",
        function(e)
        {
            e.preventDefault();

            /* On récupère les valeurs du formulaires */

            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const address = document.getElementById("address").value;
            const city = document.getElementById("town").value;
            const email = document.getElementById("email").value;

            /* On créé un objet qui contient toute les valeurs du formulaire */

            let contact = {
                "firstName": firstName,
                "lastName": lastName,
                "address": address,
                "city" : city,
                "email": email
            };

            /*Récupère l'id de tout les produits et les mets dans un tableau products */

            let products = [];
            for(i=0; i < localStorageCartParsed.length; i++)
            {
                products.push(localStorageCartParsed[i]._id);
            }

            clientContactInformation = new order(contact, products);

            /*on envoie les données au serveur*/
            fetch
            (
                "http://localhost:3000/api/teddies/order",
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(clientContactInformation)
                }
            )
            .then
            (
                function(response)
                {
                    if (response.ok)
                    {
                        return response.json();
                    }
                }
            )
            .then
            (
                function(order)
                {
                    console.log(order);
                    order = JSON.stringify(order);
                    window.localStorage.setItem("order", order);
                    window.location.href = "confirmation.html";
                }
            )
        }
    );
}