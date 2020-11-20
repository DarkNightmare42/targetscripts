// ==UserScript==
// @name         walmartCheckout
// @namespace    http://example.tld
// @version      1.0.0
// @description  walmartCheckout
// @author       DarkNightmare42, dill0wn
// @updateUrl    https://github.com/DarkNightmare42/targetscripts/raw/main/walmartCheckout.user.js
// @downloadUrl  https://github.com/DarkNightmare42/targetscripts/raw/main/walamartCheckout.user.js
// @match        https://www.walmart.com/cart
// @match        https://www.walmart.com/checkout/*
// @grant        none
// ==/UserScript==

var triedToBuy = false;

setInterval(function(){
    var cartCheckout = document.querySelectorAll('[data-tl-id="CartCheckOutBtnTop"]');
    var readyToOrder = document.querySelectorAll('[data-tl-id="CartMoveToCartBtn"]');

    if(cartCheckout){
        cartCheckout[0].click(); // Attempt to checkout
    } else if (!cartCheckout && !triedToBuy) {
        triedToBuy = true;
        readyToOrder[0].click(); // Attempt to place order
    }
}, 250);

setInterval(function(){
    var placeOrder = document.querySelectorAll('[data-tl-id="button"]');
    var cvv = document.querySelectorAll('[inputid="cvv-verify-1"]');
    if(placeOrder){
        placeOrder[0].click();
    }
    placeOrder[0].click();
    placeOrder[0].click();
    if(cvv){
        ("field-input field-input--secondary").val ("insert_cvv_here");
    }
    placeOrder[0].click();
    placeOrder[0].click();
}, 250); //refreshes every minute

setInterval(function(){
    //script refresh
}, 60000);

//script is in the testing stages, use at your own risk 
