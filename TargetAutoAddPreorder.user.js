// ==UserScript==
// @name         TargetPS5AutoAdd
// @description  TargetPS5AutoAdd
// @author       DarkNightmare42
// @version      0.2.1
// @updateUrl    https://github.com/DarkNightmare42/targetscripts/raw/main/TargetAutoAddPreorder.user.js
// @downloadUrl  https://github.com/DarkNightmare42/targetscripts/raw/main/TargetAutoAddPreorder.user.js
// @namespace    http://example.tld
// @match        https://www.target.com/p/playstation-5-*
// @grant        none
// ==/UserScript==

//the url above can be modified to suit just about any preorder item on targets website
var ps5InCart = false;

setInterval(function(){ //add to cart function

    document.getElementById("warranty-service").checked = true;
    var ps5AddToCart = document.querySelectorAll("[data-test='preorderButton']");
    var closeError = document.querySelectorAll('[data-test="errorContent-okButton"]');
    var close = document.querySelectorAll("body > div:nth-child(31) > div > div > button > span > div");

    if(ps5AddToCart && ps5InCart == false){ //checks that it was not attempted prior
        ps5AddToCart[0].click(); // Attempt to add to cart
        ps5InCart = true //if click succeeds, changes status to true
        

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

    location.reload();
}, 60000); //refreshes every 3 minutes
