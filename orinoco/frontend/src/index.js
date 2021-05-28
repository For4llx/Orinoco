if (window.location.pathname.indexOf("index.html") != -1)
{
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
            /* On créé les éléments HTML des produits autant de fois qu'il en existe */

            let teddybearList = document.querySelector(".teddybear__list");

            for( i = 0; i < data.length; i++)
            {
                teddybearList.innerHTML +=/*html*/`
                <li>
                    <article>
                        <figure>
                            <img>
                        </figure>
                        <div>
                            <h3></h3>
                            <p></p>
                            <p></p>
                        </div>
                        <a></a>
                    </article>
                </li>`;
            }

            /* On ajoute aux éléments leur textcontent et leur image */

            for( i = 0; i < data.length; i++)
            {
                let teddybearImage = document.querySelectorAll(".teddybear__list img");
                let teddybearName = document.querySelectorAll(".teddybear__list h3");  
                let teddybearPrice = document.querySelectorAll(".teddybear__list p:nth-child(3)");
                let teddybearButton = document.querySelectorAll(".teddybear__list a");
                
                teddybearImage[i].setAttribute("src", data[i].imageUrl);
                teddybearName[i].textContent = data[i].name;
                teddybearPrice[i].textContent = "Prix:" + data[i].price + "€";
                teddybearButton[i].textContent = "Voir le produit";
            }

            /* On ajoute aux éléments leur class */

            for( i = 0; i < data.length; i++)
            {
                let teddybearBullet = document.querySelectorAll(".teddybear__list li");
                let teddybearArticle = document.querySelectorAll(".teddybear__list article");
                let teddybearImage = document.querySelectorAll(".teddybear__list img");
                let teddybearContainer = document.querySelectorAll(".teddybear__list div");
                let teddybearName = document.querySelectorAll(".teddybear__list h3");
                let teddybearDescription = document.querySelectorAll(".teddybear__list p:nth-child(2)");
                let teddybearPrice = document.querySelectorAll(".teddybear__list p:nth-child(3)");
                let teddybearButton = document.querySelectorAll(".teddybear__list a");
            
                teddybearBullet[i].setAttribute("class", "teddybear__bullet");
                teddybearArticle[i].setAttribute("class", "teddybear__article");
                teddybearImage[i].setAttribute("class", "teddybear__image");
                teddybearContainer[i].setAttribute("class", "teddybear__container");
                teddybearName[i].setAttribute("class", "teddybear__name");
                teddybearDescription[i].setAttribute("class", "teddybear__description");
                teddybearPrice[i].setAttribute("class", "teddybear__price");
                teddybearButton[i].setAttribute("class", "teddybear__button");
                teddybearButton[i].setAttribute("href", "produit.html?teddybearId=" + data[i]._id);
            }
        }
    );
}
