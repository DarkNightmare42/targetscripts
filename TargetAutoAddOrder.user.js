// ==UserScript==
// @name         TargetPS5AutoAdd
// @description  TargetPS5AutoAdd
// @author       DarkNightmare42
// @version      0.2.2
// @updateUrl    https://github.com/DarkNightmare42/targetscripts/raw/main/TargetAutoAddOrder.user.js
// @downloadUrl  https://github.com/DarkNightmare42/targetscripts/raw/main/TargetAutoAddOrder.user.js
// @namespace    http://example.tld
// @match        https://www.target.com/p/playstation-5-* //change this url to suit the item, look a the bottom for an explanation
// @grant        none
// ==/UserScript==

//the url above can be modified to suit just about any preorder item on targets website
var ps5InCart = false;

setInterval(function(){ //add to cart function

    document.getElementById("warranty-service").checked = true;
    var ps5AddToCart = document.querySelectorAll('[data-test="shipItButton"]'); //shipIt button 
    //var ps5AddToCart = document.querySelectorAll('[data-test="orderPickupButton"]'); //ordePickupButton
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
}, 180000); //refreshes every 3 minutes

/* script is a very minor modification of the existing auto add preorder script, which I will leave as is for future releases
and also to simplify explaining it's use. 
to use the shipIt button, disable the pickup up button by adding // in front of the line commented as shipIt button and comment out the pickup button
with //, instructions go vice versa. 

Change the url to match the item you want to order, try to keep it as a wildcard to ensure compatibility for example:
if the url is: https://www.target.com/p/playstation-5-console/-/A-81114595#lnk=sametab
modify it and paste a shortened wildcard version such as: https://www.target.com/p/playstation-5-*

*/
