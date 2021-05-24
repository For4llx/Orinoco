if (window.location.pathname.indexOf("panier.html") != -1)
{
    cart = JSON.parse(localStorage.cart);
    if(cart.length > 0)
    {
        let selectOrderList = document.querySelector(".order__list");
        
        for( i = 0; i < cart.length; i++)
        {
            selectOrderList.innerHTML += "<li><article><figure><img></figure><div><h3></h3><p></p><div><h3>Quantité</h3><p></p></div><div><h3>Couleurs</h3><p></p></div><button>Supprimer</button></div></article></li>";
        }

        let overallPrice = 0;
        localStorageParsed = JSON.parse(window.localStorage.cart);

        for(i = 0; i < localStorageParsed.length; i++)
        {
            overallPrice +=  localStorageParsed[i].price * localStorageParsed[i].quantity;
        }

        const selectAmount = document.querySelector(".order > h2:nth-child(1)");

        selectAmount.textContent = "Le montant de votre panier est de " + overallPrice + "€";
        
        for( i = 0; i < cart.length; i++)
        {
            let teddybearImage = document.querySelectorAll(".order__list img");
            let teddybearName = document.querySelectorAll(".order__list > li > article > div:nth-child(2) > h3:nth-child(1)");
            let teddybearPrice = document.querySelectorAll(".order__list > li > article > div > p:nth-child(2)");
            let teddybearQuantity = document.querySelectorAll(".order__list > li > article > div > div:nth-child(3) > p:nth-child(2)");
            let teddybearColors = document.querySelectorAll(".order__list > li > article > div > div:nth-child(4) > p:nth-child(2)");

            teddybearImage[i].setAttribute("src", cart[i].imageUrl);
            teddybearName[i].textContent = cart[i].name;
            teddybearPrice[i].textContent = "Prix:" + cart[i].price + "€";
            teddybearQuantity[i].textContent = cart[i].quantity;
            teddybearColors[i].textContent = cart[i].colors;
            
        }
        /* On ajoute aux éléments leur textcontent et leur image */
        for( i = 0; i < cart.length; i++)
        {
            let teddybearBullet = document.querySelectorAll(".order__list li");
            let teddybearImage = document.querySelectorAll(".order__list img");
            let teddybearPrice = document.querySelectorAll(".order__list > li > article > div > p:nth-child(2)");
            let teddybearButton = document.querySelectorAll(".order__list button");

            teddybearBullet[i].setAttribute("class", "order__bullet");
            teddybearImage[i].setAttribute("class", "order__image");
            teddybearPrice[i].setAttribute("class", "order__price");
            teddybearButton[i].setAttribute("class", "order__delete");
        }
    }
}