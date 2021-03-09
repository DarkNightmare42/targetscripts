// ==UserScript==
// @name         TargetAutoAdd.NoInsurance
// @description  TargetAutoAdd.NoInsurance
// @author       DarkNightmare42
// @version      0.1
// @updateUrl    https://github.com/DarkNightmare42/targetscripts/raw/main/TargetAutoAddOrder.user.js
// @downloadUrl  https://github.com/DarkNightmare42/targetscripts/raw/main/TargetAutoAddOrder.user.js
// @namespace    http://example.tld
// @match        https://www.target.com/p/playstation-5-*
// @match        https://www.target.com/p/funko-pop-deadpool-deadpool-with-teddy-bear*
// @grant        none
// ==/UserScript==


setInterval(function(){ //add to cart function

    //document.getElementById("warranty-service").checked = true;
    var viewCartAndCheckout = document.querySelectorAll('[data-test="addToCartModalViewCartCheckout"]');
    var AddToCart = document.querySelectorAll('[data-test="shipItButton"]'); //shipIt button
    //var AddToCart = document.querySelectorAll('[data-test="orderPickupButton"]'); //ordePickupButton
    var closeError = document.querySelectorAll('[data-test="errorContent-okButton"]');
    var close = document.querySelectorAll("body > div:nth-child(31) > div > div > button > span > div");
    var InCart = false;

    if(AddToCart && InCart == false){ //checks that it was not attempted prior
        AddToCart[0].click(); // Attempt to add to cart
    }


    if(viewCartAndCheckout){ //if there was an error adding to cart, closes error dialog
        InCart = true;
        window.location = "https://www.target.com/co-cart"; //goes to checkout if the decline coverage button exist
        //alert("Not Added!");
    }


    if(closeError !== -1){ //if there was an error adding to cart, closes error dialog
        closeError[0].click();
        //alert("Not Added!");
    }

}, 250);


setInterval(function(){ //refresh function
    console.log("reload, hasFocus", document.hasFocus());

    location.reload();
}, 15000); //refreshes every 30 seconds

//use with checkout script to automate the entire process
