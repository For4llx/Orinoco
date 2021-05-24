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

            teddybearProduct.innerHTML = "<article><figure><img></figure><figcaption><h2></h2><p></p><p></p></figcaption></article>";
            
            for(i = 0; i < data.length; i++)
            {
                if (data[i]._id === teddybearId)
                {
                    teddybear = data[i]; /* On récupère les données du teddybear selectionné */

                    /* On selectionne nos élements */
                    let teddybearArticle = document.querySelector(".main__product article");
                    let teddybearImage = document.querySelector(".main__product img");
                    let teddybearFigcaption = document.querySelector(".main__product figcaption");
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
                    teddybearFigcaption.setAttribute("class", "main__figcaption");
                    teddybearPrice.setAttribute("class", "main__price");
                }
            }


            /* On ajoute toute les couleurs disponibles */

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
                    const quantitySelected = selectSelectQuantity.value;
                    const colorSelected = selectSelectColors.value;
                    teddybear = new Product(teddybear._id, colorSelected, teddybear.description, teddybear.imageUrl, teddybear.name, teddybear.price, quantitySelected);

                    const cart = window.getCart();
                    cart.push(teddybear);
                    window.saveCart(cart);
                }
            );
        }
    );
}