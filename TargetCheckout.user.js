// ==UserScript==
// @name         TargetPS5AutoSnag
// @namespace    http://example.tld
// @version      1.0.0
// @description  TargetPS5AutoSnag
// @author       brewcrew87
// @updateUrl    https://github.com/DarkNightmare42/targetscripts/raw/main/TargetCheckout.user.js
// @downloadUrl  https://github.com/DarkNightmare42/targetscripts/raw/main/TargetCheckout.user.js
// @match        https://www.target.com/co*
// @grant        none
// ==/UserScript==

var triedToBuy = false;

setInterval(function(){
    var ps5saved = document.querySelectorAll("[data-test='moveSFLToCartBtn']");
    var ps5inCart = document.querySelectorAll("[data-test='checkout-button']");
    var ps5readyToOrder = document.querySelectorAll("[data-test='placeOrderButton']");

    if(ps5inCart.length){
        ps5inCart[0].click(); // Attempt to checkout
    } else if (ps5readyToOrder.length && !triedToBuy) {
        triedToBuy = true;
        ps5readyToOrder[0].click(); // Attempt to place order
    } else if (ps5saved.length) {
        ps5saved[0].click(); // Attempt to add to cart
    }
}, 250);

setInterval(function(){
    var content = document.body.textContent || document.body.innerText;
    var hasText = content.indexOf("Item(s) currently unavailable")!==-1;
    var needRefresh = content.indexOf("Due to a temporary issue")!==-1;
    var need2 = content.indexOf("Something went wrong")!==-1;
    if(hasText || needRefresh || need2){
        window.location = "https://www.target.com/co-cart";
    }
}, 60000); //refreshes every minute
