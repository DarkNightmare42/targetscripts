// ==UserScript==
// @name         Walmart XSX & PS5 Add To Cart
// @author       dill0wn, darknightmare42
// @description  Adds items to your walmart cart and notifies you.
// @version      1.0.4
// @namespace    http://example.tld
// @match        https://www.walmart.com/ip/Xbox-Series-*
// @match        https://www.walmart.com/ip/XB1-Xbox-Series-*
// @match        https://www.walmart.com/cp/playstation-5-*
// @match        https://www.walmart.com/ip/PlayStation5-*
// @match        https://www.walmart.com/ip/PlayStation-5-*
// @match        https://www.walmart.com/ip/Sony-PlayStation-5-*
// @match        https://www.walmart.com/cp/Sony-PlayStation-5-*
// @grant        GM_notification
// ==/UserScript==

/* 

- Used TargetAutoAddOrder as a jumping off point
- handles XS and PS5

*/


const reloadIntervalSeconds = 60;
const reloadRandomSeconds = 20;

var inCart = false;
var addToCart = null;

var cartChecker = setInterval(function(){ //add to cart function

    var addToCart = document.querySelector('[data-tl-id="ProductPrimaryCTA-cta_add_to_cart_button"]');
    /// from target script
    // var closeError = document.querySelectorAll('[data-test="errorContent-okButton"]');
    // var close = document.querySelectorAll("body > div:nth-child(31) > div > div > button > span > div");

    if(addToCart && inCart == false){ //checks that it was not attempted prior
        addToCart.click(); // Attempt to add to cart
        inCart = true //if click succeeds, changes status to true
        notifyMe();
        clearRefresh();
        //clearChecker();
    }
    else if(!addToCart) {
        console.log("not available yet");
    }

//     if(closeError !== -1){ //if there was an error adding to cart, closes error dialog
//         closeError[0].click();
//         //alert("Not Added!");
//     }

}, 250);

function parseSiteName() {
}

function walmartProductNameFromUrl() {
    var path = document.location.pathname.split('/');
    var productName = path[path.length - 2];
    productName = productName.replaceAll("-", " ");
    return productName;
}

function notifyMe() {
    var domain = document.location.hostname;
    var parts = domain.split(".");
    parts.pop();
    parts = parts.filter(part => part !== 'www');
    var siteName = parts.join('.');

    var productName = walmartProductNameFromUrl();
    
    GM_notification({
        title:`${siteName} - ${productName}`,
        text: `${productName} in cart!`,
        image: document.location.origin + '/favicon.ico', // image doesn't work on mac
        silent:false,
        onclick: function() {
            window.focus();
        },
        timeout:0
    });
}

function clearChecker() {
    clearInterval(cartChecker);
}

var refresher = null;
function clearRefresh() {
    clearInterval(refresher);
}
function resetRefresh() {
    clearRefresh();

    refresher = setInterval(function(){ //refresh function
        if(!addToCart){
            location.reload();
        }
    }, reloadIntervalSeconds * 500 - reloadRandomSeconds * 500 * Math.random()); // refreshes every 30 seconds
}
resetRefresh();


