if (window.location.pathname.indexOf("panier.html") != -1)
{
    cart = JSON.parse(localStorage.cart);
    if(cart.length > 0)
    {
        let selectOrderList = document.querySelector(".order__list");
        
        for( i = 0; i < cart.length; i++)
        {
            selectOrderList.innerHTML += "<li><article><figure><img></figure><figcaption><h3></h3><p></p><div><h3>Quantité</h3><p></p></div><div><h3>Couleurs</h3><p></p></div><button>Supprimer</button></figcaption></article></li>";
        }
        setTimeout
        (
            function ()
            {
                for( i = 0; i < cart.length; i++)
                {
                    let teddybearImage = document.querySelectorAll(".order__list img");
                    let teddybearName = document.querySelectorAll(".order__list li article figcaption > h3");
                    let teddybearPrice = document.querySelectorAll(".order__list > li > article > figcaption > p:nth-child(2)");
                    let teddybearQuantity = document.querySelectorAll(".order__list > li > article > figcaption > div:nth-child(3) > p:nth-child(2)");
                    let teddybearColors = document.querySelectorAll(".order__list > li > article > figcaption > div:nth-child(4) > p:nth-child(2)");

                    teddybearImage[i].setAttribute("src", cart[i].imageUrl);
                    teddybearName[i].textContent = cart[i].name;
                    teddybearPrice[i].textContent = "Prix:" + cart[i].price + "€";
                    teddybearQuantity[i].textContent = cart[i].quantity;
                    teddybearColors[i].textContent = cart[i].colors;
                    
                }
            }, 2000
        );

        setTimeout
        (
            function () /* On ajoute aux éléments leur textcontent et leur image */
            {
                for( i = 0; i < cart.length; i++)
                {
                    let teddybearArticle = document.querySelectorAll(".order__list article");
                    let teddybearImage = document.querySelectorAll(".order__list img");
                    let teddybearFigcaption = document.querySelectorAll(".order__list figcaption");
                    let teddybearPrice = document.querySelectorAll(".order__list > li > article > figcaption > p:nth-child(2)");
                    let teddybearContainer = document.querySelectorAll(".order__list div");
                    let teddybearButton = document.querySelectorAll(".order__list button");

                    teddybearArticle[i].setAttribute("class", "order__article");
                    teddybearImage[i].setAttribute("class", "order__image");
                    teddybearFigcaption[i].setAttribute("class", "order__figcaption");
                    teddybearPrice[i].setAttribute("class", "order__price");
                    teddybearContainer[i].setAttribute("class", "order__contaienr");
                    teddybearButton[i].setAttribute("class", "order__delete");
                }
            }, 2000
        );
    }
}