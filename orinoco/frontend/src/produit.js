if (window.location.pathname.indexOf("produit.html") != -1)
{
    const params = new URLSearchParams(window.location.search);
    const teddybearId = params.get("teddybearId");
    teddybear = "";

    class Product
    {
        constructor(_id, colors, description, imageUrl, name,  price, quantity)
        {
            this._id = _id;
            this.colors = colors;
            this.description = description;
            this.imageUrl = imageUrl;
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    fetch("http://localhost:3000/api/teddies")
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
        function (data) 
        {
            /* On créé les éléments HTML du produit */
            let teddybearProduct = document.querySelector(".main__product");

            teddybearProduct.innerHTML = /*html*/`
            <article>
                <figure>
                    <img>
                </figure>
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                </div>
            </article>`;
            
            for(i = 0; i < data.length; i++)
            {
                if (data[i]._id === teddybearId)
                {
                    teddybear = data[i]; /* On récupère les données du teddybear selectionné */

                    /* On selectionne nos élements */
                    let teddybearArticle = document.querySelector(".main__product article");
                    let teddybearImage = document.querySelector(".main__product img");
                    let teddybearContainer = document.querySelector(".main__product div");
                    let teddybearName = document.querySelector(".main__product h2");
                    let teddybearPrice = document.querySelector(".main__product p:nth-child(2)");
                    let teddybearDescription = document.querySelector(".main__product p:nth-child(3)");

                    /* On ajoute aux éléments leur textcontent et leur image */
                    teddybearImage.setAttribute("src", teddybear.imageUrl);
                    teddybearName.textContent = teddybear.name;;
                    teddybearPrice.textContent = "Prix:" + teddybear.price + "€";
                    teddybearDescription.textContent = teddybear.description;

                    /* On ajoute aux éléments leur class */
                    teddybearArticle.setAttribute("class", "main__article");
                    teddybearImage.setAttribute("class", "main__image");
                    teddybearContainer.setAttribute("class", "main__container");
                    teddybearPrice.setAttribute("class", "main__price");
                }
            }

            /* On ajoute toute les options de couleurs disponibles */

            let selectSelectColors = document.querySelector(".main__colors");

            for( i = 0; i < teddybear.colors.length; i++)
            {
                selectSelectColors.innerHTML += "<option>" + teddybear.colors[i] + "</option>";
            }

            /* On ajoute toute les couleurs disponibles */
                
            let selectOptionColors = document.querySelectorAll(".main__colors option");

            for( i = 0; i < teddybear.colors.length; i++)
            {
                selectOptionColors[i].setAttribute("value", teddybear.colors[i]);
            }

            /* On sélectionne la quantité */
            let selectSelectQuantity = document.querySelector(".main__quantity");
            
            const selectMainButton = document.querySelector(".main__button");

            selectMainButton.addEventListener
            (
                "click",
                function()
                {
                    /* On récupère les valeurs des options sélectionnés */
                    const quantitySelected = selectSelectQuantity.value;
                    const colorSelected = selectSelectColors.value;

                    /* On créer un produit teddybear avec les options sélectionnées */
                    teddybear = new Product
                    (
                        teddybear._id,
                        colorSelected, 
                        teddybear.description, 
                        teddybear.imageUrl, 
                        teddybear.name, 
                        teddybear.price, 
                        quantitySelected
                    );

                    /* On sauvegarde dans le nouvelle objet dans le localstorage */
                    const cart = window.getCart();
                    cart.push(teddybear);
                    window.saveCart(cart);
                }
            );
        }
    );
}