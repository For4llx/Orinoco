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

    let selectMainList = document.querySelector(".main__list");
    
    for( i = 0; i < localStorageCartParsed.length; i++)
    {
        selectMainList.innerHTML +=/*html*/` 
        <li>
            <article>
                <figure>
                    <img>
                </figure>
                <div>
                    <h3></h3>
                    <p></p>
                    <div>
                        <h3>Quantité</h3>
                        <p></p>
                    </div>
                    <div>
                        <h3>Couleurs</h3>
                        <p></p>
                    </div>
                    <button>Supprimer</button>
                </div>
            </article>
        </li>`;
    }

    for( i = 0; i < localStorageCartParsed.length; i++)
    {
        let teddybearImage = document.querySelectorAll(".main__list img");
        let teddybearName = document.querySelectorAll(".main__list > li > article > div:nth-child(2) > h3:nth-child(1)");
        let teddybearPrice = document.querySelectorAll(".main__list > li > article > div > p:nth-child(2)");
        let teddybearQuantity = document.querySelectorAll(".main__list > li > article > div > div:nth-child(3) > p:nth-child(2)");
        let teddybearColors = document.querySelectorAll(".main__list > li > article > div > div:nth-child(4) > p:nth-child(2)");

        teddybearImage[i].setAttribute("src", localStorageCartParsed[i].imageUrl);
        teddybearName[i].textContent = localStorageCartParsed[i].name;
        teddybearPrice[i].textContent = "Prix:" + localStorageCartParsed[i].price + "€";
        teddybearQuantity[i].textContent = localStorageCartParsed[i].quantity;
        teddybearColors[i].textContent = localStorageCartParsed[i].colors;
    }
    /* On ajoute aux éléments leur textcontent et leur image */
    for( i = 0; i < localStorageCartParsed.length; i++)
    {
        let teddybearBullet = document.querySelectorAll(".main__list li");
        let teddybearImage = document.querySelectorAll(".main__list img");
        let teddybearPrice = document.querySelectorAll(".main__list > li > article > div > p:nth-child(2)");
        let teddybearButton = document.querySelectorAll(".main__list button");

        teddybearBullet[i].setAttribute("class", "main__bullet");
        teddybearImage[i].setAttribute("class", "main__image");
        teddybearPrice[i].setAttribute("class", "main__price");
        teddybearButton[i].setAttribute("class", "main__delete");
    }

    /* Récupère le prix de tout les produits et on les additionne puis on les affiche */
    let overallPrice = 0;

    for(i = 0; i < localStorageCartParsed.length; i++)
    {
        overallPrice +=  localStorageCartParsed[i].price * localStorageCartParsed[i].quantity;
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


            /* On valide les données envoyées avec regex */
            const firstNameValidation = /^[a-zA-Züäëïöûâêîôàèéç]+$/.test(firstName);
            const lastNameValidation = /^[a-zA-Züäëïöûâêîôàèéç]+$/.test(lastName);
            const addressValidation = /^[0-9a-zA-Züäëïöûâêîôàèéç]+$/.test(address);
            const cityValidation = /^[a-zA-Züäëïöûâêîôàèéç]+$/.test(city);
            const emailValidation = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email);

            if (emailValidation & cityValidation & addressValidation & lastNameValidation & firstNameValidation)
            {
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
                        order = JSON.stringify(order);
                        window.localStorage.setItem("order", order);
                        window.location.href = "confirmation.html";
                    }
                )
                .catch
                (
                    function(error)
                    {
                        console.log(error);
                    }
                )
            }
            else
            {
                var errors = [];
                if(!firstNameValidation)
                {
                    console.log("Prénom invalide");
                    errors.push("Veuillez entrer un prénom valide");
                }
                if(!lastNameValidation)
                {
                    console.log("Nom invalide");
                    errors.push("Veuillez entrer un nom valide");
                }
                if(!addressValidation)
                {
                    console.log("Addresse invalide");
                    errors.push("Veuillez entrer une addresse valide");
                }
                if(!cityValidation)
                {
                    console.log("Ville invalide");
                    errors.push("Veuillez entrer un nom de ville valide");
                }
                if(!emailValidation)
                {
                    console.log("Email invalide");
                    errors.push("Veuillez entrer un email valide");
                }
                alert(errors.join('\n'));
            }
        }
    );
}