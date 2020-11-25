// ==UserScript==
// @name         walmartCheckout
// @namespace    http://example.tld
// @version      1.0.2
// @description  walmartCheckout
// @author       DarkNightmare42, dill0wn
// @updateUrl    https://github.com/DarkNightmare42/targetscripts/raw/main/walmartCheckout.user.js
// @downloadUrl  https://github.com/DarkNightmare42/targetscripts/raw/main/walamartCheckout.user.js
// @match        https://www.walmart.com/cart
// @match        https://www.walmart.com/checkout*
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
    var con = document.querySelectorAll('[data-automation-id="persistent-footer-continue"]');
    var cvv = document.querySelectorAll('[class="field-input field-input--secondary"]');
    var inCart = document.querySelectorAll('[analyticsid="cart-btn-save-for-later"]');
    var method = document.querySelectorAll('[aria-label="Continue to Delivery Address"]');
    var addAddress = document.querySelectorAll('[data-automation-id="new-address-tile-add-new-address"]');
    var propose = document.querySelectorAll('[name="proposeDonation"]');

    if(inCart){
        placeOrder[0].click();
        if(method){
            con[0].click();
            if(addAddress){
                con[0].click();
                if(cvv){
                    document.getElementByName("cvv").value=("cvv-placeholder");
                    placeOrder[0].click();
                }
            }
        }
    }
    if(propose){
        placeOrder[0].click();
    }
}, 60000); //refreshes every minute

setInterval(function(){
    //script refresh
}, 60000);
