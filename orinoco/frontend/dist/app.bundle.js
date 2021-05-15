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

eval("__webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n__webpack_require__(/*! ./produit.js */ \"./src/produit.js\");\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("if (window.location.pathname.indexOf(\"index.html\") != -1) {\n  fetch(\"http://localhost:3000/api/teddies\").then(function (response) {\n    if (response.ok) {\n      return response.json();\n    }\n  }).then(function (data)\n  /* On créé les éléments HTML des produits autant de fois qu'il en existe */\n  {\n    var teddybearList = document.querySelector(\".teddybear__list\");\n\n    for (i = 0; i < data.length; i++) {\n      teddybearList.innerHTML += \"<li><article><figure><img></figure><figcaption><h3></h3><p></p><p></p></figcaption><a></a></article></li>\";\n    }\n\n    setTimeout(function ()\n    /* On ajoute aux éléments leur textcontent et leur image */\n    {\n      for (i = 0; i < data.length; i++) {\n        var teddybearImage = document.querySelectorAll(\".teddybear__list img\");\n        var teddybearName = document.querySelectorAll(\".teddybear__list h3\");\n        var teddybearPrice = document.querySelectorAll(\".teddybear__list p:nth-child(3)\");\n        var teddybearButton = document.querySelectorAll(\".teddybear__list a\");\n        teddybearImage[i].setAttribute(\"src\", data[i].imageUrl);\n        teddybearName[i].textContent = data[i].name;\n        teddybearPrice[i].textContent = \"Prix:\" + data[i].price + \"€\";\n        teddybearButton[i].textContent = \"Voir le produit\";\n      }\n    }, 2000);\n    setTimeout(function ()\n    /* On ajoute aux éléments leur class */\n    {\n      for (i = 0; i < data.length; i++) {\n        var teddybearBullet = document.querySelectorAll(\".teddybear__list li\");\n        var teddybearArticle = document.querySelectorAll(\".teddybear__list article\");\n        var teddybearImage = document.querySelectorAll(\".teddybear__list img\");\n        var teddybearFigcaption = document.querySelectorAll(\".teddybear__list figcaption\");\n        var teddybearName = document.querySelectorAll(\".teddybear__list h3\");\n        var teddybearDescription = document.querySelectorAll(\".teddybear__list p:nth-child(2)\");\n        var teddybearPrice = document.querySelectorAll(\".teddybear__list p:nth-child(3)\");\n        var teddybearButton = document.querySelectorAll(\".teddybear__list a\");\n        teddybearBullet[i].setAttribute(\"class\", \"teddybear__bullet\");\n        teddybearArticle[i].setAttribute(\"class\", \"teddybear__article\");\n        teddybearImage[i].setAttribute(\"class\", \"teddybear__image\");\n        teddybearFigcaption[i].setAttribute(\"class\", \"teddybear__figcaption\");\n        teddybearName[i].setAttribute(\"class\", \"teddybear__name\");\n        teddybearDescription[i].setAttribute(\"class\", \"teddybear__description\");\n        teddybearPrice[i].setAttribute(\"class\", \"teddybear__price\");\n        teddybearButton[i].setAttribute(\"class\", \"teddybear__button\");\n        teddybearButton[i].setAttribute(\"href\", \"produit.html?teddybearId=\" + data[i]._id);\n      }\n    }, 2000);\n  });\n}\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/index.js?");

/***/ }),

/***/ "./src/produit.js":
/*!************************!*\
  !*** ./src/produit.js ***!
  \************************/
/***/ (() => {

eval("if (window.location.pathname.indexOf(\"produit.html\") != -1) {\n  var params = new URLSearchParams(window.location.search);\n  var teddybearId = params.get(\"teddybearId\");\n  teddybear = \"\";\n  fetch(\"http://localhost:3000/api/teddies\").then(function (response) {\n    if (response.ok) {\n      return response.json();\n    }\n  }).then(function (data) {\n    /* On créé les éléments HTML du produit */\n    var teddybearProduct = document.querySelector(\".main__product\");\n    teddybearProduct.innerHTML = \"<article><figure><img></figure><figcaption><h2></h2><p></p><p></p></figcaption></article>\";\n    setTimeout(function () {\n      for (i = 0; i < data.length; i++) {\n        if (data[i]._id === teddybearId) {\n          teddybear = data[i];\n          /* On récupère les données du teddybear selectionné */\n\n          /* On selectionne nos élements */\n\n          var teddybearArticle = document.querySelector(\".main__product article\");\n          var teddybearImage = document.querySelector(\".main__product img\");\n          var teddybearFigcaption = document.querySelector(\".main__product figcaption\");\n          var teddybearName = document.querySelector(\".main__product h2\");\n          var teddybearPrice = document.querySelector(\".main__product p:nth-child(2)\");\n          var teddybearDescription = document.querySelector(\".main__product p:nth-child(3)\");\n          /* On ajoute aux éléments leur textcontent et leur image */\n\n          teddybearImage.setAttribute(\"src\", teddybear.imageUrl);\n          teddybearName.textContent = teddybear.name;\n          ;\n          teddybearPrice.textContent = \"Prix:\" + teddybear.price + \"€\";\n          teddybearDescription.textContent = teddybear.description;\n          /* On ajoute aux éléments leur class */\n\n          teddybearArticle.setAttribute(\"class\", \"main__article\");\n          teddybearImage.setAttribute(\"class\", \"main__image\");\n          teddybearFigcaption.setAttribute(\"class\", \"main__figcaption\");\n          teddybearPrice.setAttribute(\"class\", \"main__price\");\n        }\n      }\n    }, 2000);\n    setTimeout(function ()\n    /* On ajoute toute les couleurs disponibles */\n    {\n      var selectSelectColors = document.querySelector(\".main__colors\");\n\n      for (i = 0; i < teddybear.colors.length; i++) {\n        selectSelectColors.innerHTML += \"<option>\" + teddybear.colors[i] + \"</option>\";\n      }\n    }, 3000);\n    setTimeout(function ()\n    /* On ajoute toute les couleurs disponibles */\n    {\n      var selectOptionColors = document.querySelectorAll(\".main__colors option\");\n\n      for (i = 0; i < teddybear.colors.length; i++) {\n        selectOptionColors[i].setAttribute(\"value\", teddybear.colors[i]);\n      }\n    }, 3500);\n    var selectSelectQuantity = document.querySelector(\".main__quantity\");\n    selectSelectQuantity.addEventListener(\"change\", function (event) {\n      quantitySelected = event.target.value + \"\";\n    });\n    var selectSelectColors = document.querySelector(\".main__colors\");\n    selectSelectColors.addEventListener(\"change\", function (event) {\n      colorSelected = event.target.value + \"\";\n    });\n    /* Au clique du boutton principal, on ajoute le nounours avec ses options à localstorage */\n\n    var selectMainButton = document.querySelector(\".main__button\");\n    selectMainButton.addEventListener(\"click\", function () {\n      teddybearObject = Object.values(teddybear);\n      teddybearObject.push({\n        \"quantity\": quantitySelected,\n        \"color_selected\": colorSelected\n      });\n      window.localStorage.setItem(teddybear.name, JSON.stringify(teddybearObject));\n    });\n  });\n}\n\n//# sourceURL=webpack://romeonobime_5_21042021/./src/produit.js?");

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