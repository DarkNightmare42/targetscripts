// ==UserScript==
// @name         TargetPS5AutoAdd
// @namespace    http://example.tld
// @version      0.1
// @description  TargetPS5AutoSnag
// @author       You
// @match        https://www.target.com/p/playstation-5-*
// @grant        none
// ==/UserScript==

var triedToAdd = false;
var ps5inCart = 0;

setInterval(function(){

    document.getElementById("warranty-service").checked = true;
    var ps5AddToCart = document.querySelectorAll("[data-test='preorderButton']");
    //var ps5readyToOrder = document.querySelectorAll("[data-test='placeOrderButton']");
    if(ps5inCart = 1){
        throw new Error("Already Added!");
;
    }

    else {
        ps5AddToCart[0].click(); // Attempt to add to cart
    }

    var popUp = document.body.textContent || document.body.innerText;
    //var test = "Added to cartfree standard shipping with your RedCard";
    //var containsAdded = popUp.indexOf("Added to cartfree standard shipping with your RedCard");
    var goToCart = document.querySelectorAll('[data-test="addToCartModalViewCartCheckout"]');
    if(goToCart){
        ps5inCart = 1;
        window.location = "https://www.target.com/co-cart";
    }
}, 250);

