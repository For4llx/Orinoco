if (window.location.pathname.indexOf("produit.html") != -1)
{
    const params = new URLSearchParams(window.location.search);
    const teddybearId = params.get("teddybearId");
    console.log(teddybearId);

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
            
            setTimeout
            (
                function ()
                {
                    
                    for(i = 0; i < data.length; i++)
                    {
                        if (data[i]._id === teddybearId)
                        {
                            const teddybear = data[i]; /* On récupère les données du teddybear selectionné */

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

                            /* On ajoute autant d'options qu'il y a de couleurs disponible */
                            let teddybearSelectColors = document.querySelector(".main__colors");

                            for( y = 0; i < teddybear.colors.length; y++)
                            {
                                teddybearSelectColors.innerHTML += "<option></option>";
                            }

                            let teddybearOptionColors = document.querySelectorAll(".main__colors option");
                            /* On ajoute le nom des couleurs dans les options */
                            for( y = 0; i < teddybear.colors.length; y++)
                            {
                                teddybearOptionColors.textContent = teddybear.colors[y];
                            }
                        }
                    }
                }, 2000
            );
        }
    );
}

