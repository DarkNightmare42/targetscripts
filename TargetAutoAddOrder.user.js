// ==UserScript==
// @name         TargetPS5AutoAdd
// @description  TargetPS5AutoAdd
// @author       DarkNightmare42, dill0wn
// @version      0.2.8
// @updateUrl    https://github.com/DarkNightmare42/targetscripts/raw/main/TargetAutoAddOrder.user.js
// @downloadUrl  https://github.com/DarkNightmare42/targetscripts/raw/main/TargetAutoAddOrder.user.js
// @namespace    http://example.tld
// @match        https://www.target.com/p/playstation-5-* 
// @match        https://www.target.com/p/xbox-series-*
// @grant        none
// ==/UserScript==

var ps5InCart = false;

console.log("onload, hasFocus", document.hasFocus());

setInterval(function(){ //add to cart function

    document.getElementById("warranty-service").checked = true;
    //var ps5AddToCart = document.querySelectorAll('[data-test="shipItButton"]'); //shipIt button 
    var ps5AddToCart = document.querySelectorAll('[data-test="orderPickupButton"]'); //ordePickupButton
    var closeError = document.querySelectorAll('[data-test="errorContent-okButton"]');
    var close = document.querySelectorAll("body > div:nth-child(31) > div > div > button > span > div");

    if(ps5AddToCart && ps5InCart == false){ //checks that it was not attempted prior
        ps5AddToCart[0].click(); // Attempt to add to cart
        ps5InCart = true //if click succeeds, changes status to true

        console.log("addtocart, hasFocus", document.hasFocus());

        GM_notification({
            title:'Target - PS5 Added to Cart',
            text: `A PS5 is in your cart. Focused ${document.hasFocus()}`,
            silent:false,
            onclick: function() {
                window.focus();
            },
            timeout: 0
        });
    }

    if(closeError !== -1){ //if there was an error adding to cart, closes error dialog
        closeError[0].click();
        //alert("Not Added!");
    }

}, 250);

setInterval(function(){ //go to cart function

    var declineCoverage = document.querySelectorAll('[data-test="espModalContent-declineCoverageButton"]'); //decline coverage dialog

    declineCoverage[0].click(); //click the decline coverage button
    if(declineCoverage){
            window.location = "https://www.target.com/co-cart"; //goes to checkout if the decline coverage button exist
        }
}, 300);


setInterval(function(){ //refresh function
    console.log("reload, hasFocus", document.hasFocus());

    location.reload();
}, 60000); //refreshes every minutes

//use with checkout script to automate the entire process
