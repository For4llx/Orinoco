/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./library */ \"./src/library.js\");\n\n__webpack_require__(/*! ./index */ \"./src/index.js\");\n\n__webpack_require__(/*! ./produit */ \"./src/produit.js\");\n\n__webpack_require__(/*! ./panier */ \"./src/panier.js\");\n\n__webpack_require__(/*! ./commande */ \"./src/commande.js\");\n\n__webpack_require__(/*! ./confirmation */ \"./src/confirmation.js\");\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/app.js?");

/***/ }),

/***/ "./src/commande.js":
/*!*************************!*\
  !*** ./src/commande.js ***!
  \*************************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nif (window.location.pathname.indexOf(\"commande.html\") != -1) {\n  /*On récupère les données de cart sous forme de tableau depuis localStorage*/\n  localStorageCartParsed = JSON.parse(window.localStorage.cart);\n  /*On créer le constructor de l'objet order*/\n\n  var order = function order(contact, products) {\n    _classCallCheck(this, order);\n\n    this.contact = contact;\n    this.products = products;\n  };\n\n  var selectMainList = document.querySelector(\".main__list\");\n\n  for (i = 0; i < localStorageCartParsed.length; i++) {\n    selectMainList.innerHTML +=\n    /*html*/\n    \" \\n        <li>\\n            <article>\\n                <figure>\\n                    <img>\\n                </figure>\\n                <div>\\n                    <h3></h3>\\n                    <p></p>\\n                    <div>\\n                        <h3>Quantit\\xE9</h3>\\n                        <p></p>\\n                    </div>\\n                    <div>\\n                        <h3>Couleurs</h3>\\n                        <p></p>\\n                    </div>\\n                    <button>Supprimer</button>\\n                </div>\\n            </article>\\n        </li>\";\n  }\n\n  for (i = 0; i < localStorageCartParsed.length; i++) {\n    var teddybearImage = document.querySelectorAll(\".main__list img\");\n    var teddybearName = document.querySelectorAll(\".main__list > li > article > div:nth-child(2) > h3:nth-child(1)\");\n    var teddybearPrice = document.querySelectorAll(\".main__list > li > article > div > p:nth-child(2)\");\n    var teddybearQuantity = document.querySelectorAll(\".main__list > li > article > div > div:nth-child(3) > p:nth-child(2)\");\n    var teddybearColors = document.querySelectorAll(\".main__list > li > article > div > div:nth-child(4) > p:nth-child(2)\");\n    teddybearImage[i].setAttribute(\"src\", localStorageCartParsed[i].imageUrl);\n    teddybearName[i].textContent = localStorageCartParsed[i].name;\n    teddybearPrice[i].textContent = \"Prix:\" + localStorageCartParsed[i].price + \"€\";\n    teddybearQuantity[i].textContent = localStorageCartParsed[i].quantity;\n    teddybearColors[i].textContent = localStorageCartParsed[i].colors;\n  }\n  /* On ajoute aux éléments leur textcontent et leur image */\n\n\n  for (i = 0; i < localStorageCartParsed.length; i++) {\n    var teddybearBullet = document.querySelectorAll(\".main__list li\");\n\n    var _teddybearImage = document.querySelectorAll(\".main__list img\");\n\n    var _teddybearPrice = document.querySelectorAll(\".main__list > li > article > div > p:nth-child(2)\");\n\n    var teddybearButton = document.querySelectorAll(\".main__list button\");\n    teddybearBullet[i].setAttribute(\"class\", \"main__bullet\");\n\n    _teddybearImage[i].setAttribute(\"class\", \"main__image\");\n\n    _teddybearPrice[i].setAttribute(\"class\", \"main__price\");\n\n    teddybearButton[i].setAttribute(\"class\", \"main__delete\");\n  }\n  /* Récupère le prix de tout les produits et on les additionne puis on les affiche */\n\n\n  var overallPrice = 0;\n\n  for (i = 0; i < localStorageCartParsed.length; i++) {\n    overallPrice += localStorageCartParsed[i].price;\n  }\n\n  var selectAmount = document.querySelector(\".main__total\");\n  selectAmount.textContent = \"Le montant de votre panier est de \" + overallPrice + \"€\";\n  /* On envoie à la validation du formulaire les données sur localstorage et au serveur*/\n\n  var selectclientInformation = document.getElementById(\"clientInformation\");\n  selectclientInformation.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    /* On récupère les valeurs du formulaires */\n\n    var firstName = document.getElementById(\"firstName\").value;\n    var lastName = document.getElementById(\"lastName\").value;\n    var address = document.getElementById(\"address\").value;\n    var city = document.getElementById(\"town\").value;\n    var email = document.getElementById(\"email\").value;\n    /* On créé un objet qui contient toute les valeurs du formulaire */\n\n    var contact = {\n      \"firstName\": firstName,\n      \"lastName\": lastName,\n      \"address\": address,\n      \"city\": city,\n      \"email\": email\n    };\n    /*Récupère l'id de tout les produits et les mets dans un tableau products */\n\n    var products = [];\n\n    for (i = 0; i < localStorageCartParsed.length; i++) {\n      products.push(localStorageCartParsed[i]._id);\n    }\n\n    clientContactInformation = new order(contact, products);\n    /*on envoie les données au serveur*/\n\n    fetch(\"http://localhost:3000/api/teddies/order\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(clientContactInformation)\n    }).then(function (response) {\n      if (response.ok) {\n        return response.json();\n      }\n    }).then(function (order) {\n      console.log(order);\n      order = JSON.stringify(order);\n      window.localStorage.setItem(\"order\", order);\n      window.location.href = \"confirmation.html\";\n    });\n  });\n}\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/commande.js?");

/***/ }),

/***/ "./src/confirmation.js":
/*!*****************************!*\
  !*** ./src/confirmation.js ***!
  \*****************************/
/***/ (() => {

eval("if (window.location.pathname.indexOf(\"confirmation.html\") != -1) {\n  localStorageOrderParsed = JSON.parse(window.localStorage.order);\n  var overallPrice = 0;\n  localStorageParsed = JSON.parse(window.localStorage.cart);\n\n  for (i = 0; i < localStorageParsed.length; i++) {\n    overallPrice += localStorageParsed[i].price * localStorageParsed[i].quantity;\n  }\n\n  var selectAcknowledgments = document.getElementById(\"acknowledgments\");\n  var selectOrderId = document.getElementById(\"orderId\");\n  selectAcknowledgments.textContent = \"Merci \" + localStorageOrderParsed.contact.firstName + \" pour votre commande d'un montant de \" + overallPrice + \" €.\";\n  selectOrderId.textContent = \"Votre identifiant de commande est le \" + localStorageOrderParsed.orderId;\n  delete window.localStorage.cart;\n  delete window.localStorage.order;\n}\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/confirmation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("if (window.location.pathname.indexOf(\"index.html\") != -1) {\n  fetch(\"http://localhost:3000/api/teddies\").then(function (response) {\n    if (response.ok) {\n      return response.json();\n    }\n  }).then(function (data) {\n    /* On créé les éléments HTML des produits autant de fois qu'il en existe */\n    var teddybearList = document.querySelector(\".teddybear__list\");\n\n    for (i = 0; i < data.length; i++) {\n      teddybearList.innerHTML += \"<li><article><figure><img></figure><div><h3></h3><p></p><p></p></div><a></a></article></li>\";\n    }\n    /* On ajoute aux éléments leur textcontent et leur image */\n\n\n    for (i = 0; i < data.length; i++) {\n      var teddybearImage = document.querySelectorAll(\".teddybear__list img\");\n      var teddybearName = document.querySelectorAll(\".teddybear__list h3\");\n      var teddybearPrice = document.querySelectorAll(\".teddybear__list p:nth-child(3)\");\n      var teddybearButton = document.querySelectorAll(\".teddybear__list a\");\n      teddybearImage[i].setAttribute(\"src\", data[i].imageUrl);\n      teddybearName[i].textContent = data[i].name;\n      teddybearPrice[i].textContent = \"Prix:\" + data[i].price + \"€\";\n      teddybearButton[i].textContent = \"Voir le produit\";\n    }\n    /* On ajoute aux éléments leur class */\n\n\n    for (i = 0; i < data.length; i++) {\n      var teddybearBullet = document.querySelectorAll(\".teddybear__list li\");\n      var teddybearArticle = document.querySelectorAll(\".teddybear__list article\");\n\n      var _teddybearImage = document.querySelectorAll(\".teddybear__list img\");\n\n      var teddybearContainer = document.querySelectorAll(\".teddybear__list div\");\n\n      var _teddybearName = document.querySelectorAll(\".teddybear__list h3\");\n\n      var teddybearDescription = document.querySelectorAll(\".teddybear__list p:nth-child(2)\");\n\n      var _teddybearPrice = document.querySelectorAll(\".teddybear__list p:nth-child(3)\");\n\n      var _teddybearButton = document.querySelectorAll(\".teddybear__list a\");\n\n      teddybearBullet[i].setAttribute(\"class\", \"teddybear__bullet\");\n      teddybearArticle[i].setAttribute(\"class\", \"teddybear__article\");\n\n      _teddybearImage[i].setAttribute(\"class\", \"teddybear__image\");\n\n      teddybearContainer[i].setAttribute(\"class\", \"teddybear__container\");\n\n      _teddybearName[i].setAttribute(\"class\", \"teddybear__name\");\n\n      teddybearDescription[i].setAttribute(\"class\", \"teddybear__description\");\n\n      _teddybearPrice[i].setAttribute(\"class\", \"teddybear__price\");\n\n      _teddybearButton[i].setAttribute(\"class\", \"teddybear__button\");\n\n      _teddybearButton[i].setAttribute(\"href\", \"produit.html?teddybearId=\" + data[i]._id);\n    }\n  });\n}\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/index.js?");

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ (() => {

eval("function getCart() {\n  return JSON.parse(localStorage.getItem(\"cart\")) || [];\n}\n\nfunction saveCart(cart) {\n  cartStringified = JSON.stringify(cart);\n  window.localStorage.setItem(\"cart\", cartStringified);\n}\n\nwindow.getCart = getCart;\nwindow.saveCart = saveCart;\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/library.js?");

/***/ }),

/***/ "./src/panier.js":
/*!***********************!*\
  !*** ./src/panier.js ***!
  \***********************/
/***/ (() => {

eval("if (window.location.pathname.indexOf(\"panier.html\") != -1) {\n  cart = JSON.parse(localStorage.cart);\n\n  if (cart.length > 0) {\n    var selectOrderList = document.querySelector(\".order__list\");\n\n    for (i = 0; i < cart.length; i++) {\n      selectOrderList.innerHTML += \"<li><article><figure><img></figure><div><h3></h3><p></p><div><h3>Quantité</h3><p></p></div><div><h3>Couleurs</h3><p></p></div><button>Supprimer</button></div></article></li>\";\n    }\n\n    var overallPrice = 0;\n    localStorageParsed = JSON.parse(window.localStorage.cart);\n\n    for (i = 0; i < localStorageParsed.length; i++) {\n      overallPrice += localStorageParsed[i].price * localStorageParsed[i].quantity;\n    }\n\n    var selectAmount = document.querySelector(\".order > h2:nth-child(1)\");\n    selectAmount.textContent = \"Le montant de votre panier est de \" + overallPrice + \"€\";\n\n    for (i = 0; i < cart.length; i++) {\n      var teddybearImage = document.querySelectorAll(\".order__list img\");\n      var teddybearName = document.querySelectorAll(\".order__list > li > article > div:nth-child(2) > h3:nth-child(1)\");\n      var teddybearPrice = document.querySelectorAll(\".order__list > li > article > div > p:nth-child(2)\");\n      var teddybearQuantity = document.querySelectorAll(\".order__list > li > article > div > div:nth-child(3) > p:nth-child(2)\");\n      var teddybearColors = document.querySelectorAll(\".order__list > li > article > div > div:nth-child(4) > p:nth-child(2)\");\n      teddybearImage[i].setAttribute(\"src\", cart[i].imageUrl);\n      teddybearName[i].textContent = cart[i].name;\n      teddybearPrice[i].textContent = \"Prix:\" + cart[i].price + \"€\";\n      teddybearQuantity[i].textContent = cart[i].quantity;\n      teddybearColors[i].textContent = cart[i].colors;\n    }\n    /* On ajoute aux éléments leur textcontent et leur image */\n\n\n    for (i = 0; i < cart.length; i++) {\n      var teddybearBullet = document.querySelectorAll(\".order__list li\");\n\n      var _teddybearImage = document.querySelectorAll(\".order__list img\");\n\n      var _teddybearPrice = document.querySelectorAll(\".order__list > li > article > div > p:nth-child(2)\");\n\n      var teddybearButton = document.querySelectorAll(\".order__list button\");\n      teddybearBullet[i].setAttribute(\"class\", \"order__bullet\");\n\n      _teddybearImage[i].setAttribute(\"class\", \"order__image\");\n\n      _teddybearPrice[i].setAttribute(\"class\", \"order__price\");\n\n      teddybearButton[i].setAttribute(\"class\", \"order__delete\");\n    }\n  }\n}\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/panier.js?");

/***/ }),

/***/ "./src/produit.js":
/*!************************!*\
  !*** ./src/produit.js ***!
  \************************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nif (window.location.pathname.indexOf(\"produit.html\") != -1) {\n  var params = new URLSearchParams(window.location.search);\n  var teddybearId = params.get(\"teddybearId\");\n  teddybear = \"\";\n\n  var Product = function Product(_id, colors, description, imageUrl, name, price, quantity) {\n    _classCallCheck(this, Product);\n\n    this._id = _id;\n    this.colors = colors;\n    this.description = description;\n    this.imageUrl = imageUrl;\n    this.name = name;\n    this.price = price;\n    this.quantity = quantity;\n  };\n\n  fetch(\"http://localhost:3000/api/teddies\").then(function (response) {\n    if (response.ok) {\n      return response.json();\n    }\n  }).then(function (data) {\n    /* On créé les éléments HTML du produit */\n    var teddybearProduct = document.querySelector(\".main__product\");\n    teddybearProduct.innerHTML = \"<article><figure><img></figure><div><h2></h2><p></p><p></p></div></article>\";\n\n    for (i = 0; i < data.length; i++) {\n      if (data[i]._id === teddybearId) {\n        teddybear = data[i];\n        /* On récupère les données du teddybear selectionné */\n\n        /* On selectionne nos élements */\n\n        var teddybearArticle = document.querySelector(\".main__product article\");\n        var teddybearImage = document.querySelector(\".main__product img\");\n        var teddybearContainer = document.querySelector(\".main__product div\");\n        var teddybearName = document.querySelector(\".main__product h2\");\n        var teddybearPrice = document.querySelector(\".main__product p:nth-child(2)\");\n        var teddybearDescription = document.querySelector(\".main__product p:nth-child(3)\");\n        /* On ajoute aux éléments leur textcontent et leur image */\n\n        teddybearImage.setAttribute(\"src\", teddybear.imageUrl);\n        teddybearName.textContent = teddybear.name;\n        ;\n        teddybearPrice.textContent = \"Prix:\" + teddybear.price + \"€\";\n        teddybearDescription.textContent = teddybear.description;\n        /* On ajoute aux éléments leur class */\n\n        teddybearArticle.setAttribute(\"class\", \"main__article\");\n        teddybearImage.setAttribute(\"class\", \"main__image\");\n        teddybearContainer.setAttribute(\"class\", \"main__container\");\n        teddybearPrice.setAttribute(\"class\", \"main__price\");\n      }\n    }\n    /* On ajoute toute les couleurs disponibles */\n\n\n    var selectSelectColors = document.querySelector(\".main__colors\");\n\n    for (i = 0; i < teddybear.colors.length; i++) {\n      selectSelectColors.innerHTML += \"<option>\" + teddybear.colors[i] + \"</option>\";\n    }\n    /* On ajoute toute les couleurs disponibles */\n\n\n    var selectOptionColors = document.querySelectorAll(\".main__colors option\");\n\n    for (i = 0; i < teddybear.colors.length; i++) {\n      selectOptionColors[i].setAttribute(\"value\", teddybear.colors[i]);\n    }\n    /* On sélectionne la quantité */\n\n\n    var selectSelectQuantity = document.querySelector(\".main__quantity\");\n    var selectMainButton = document.querySelector(\".main__button\");\n    selectMainButton.addEventListener(\"click\", function () {\n      var quantitySelected = selectSelectQuantity.value;\n      var colorSelected = selectSelectColors.value;\n      teddybear = new Product(teddybear._id, colorSelected, teddybear.description, teddybear.imageUrl, teddybear.name, teddybear.price, quantitySelected);\n      var cart = window.getCart();\n      cart.push(teddybear);\n      window.saveCart(cart);\n    });\n  });\n}\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/produit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;