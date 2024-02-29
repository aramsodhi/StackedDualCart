"use strict";

// DOM references to the retailer cart div and MEMO cart div
const retailer_cart_div = document.querySelector(".retailer-cart");
const memo_cart_div = document.querySelector(".memo-cart");

// DOM regerences to the headers inside the retailer and MEMO carts
const retailer_cart_header = document.getElementById("retailer-cart-header");

// get DOM regerences to buttons that expand/collapse the retailer cart and MEMO cart
const retailer_collapse_button = document.getElementById("retailer-collapse");
const memo_collapse_button = document.getElementById("memo-collapse");

// instantiate toggle variables that indicate whether the retailer/MEMO carts are expanded or collapsed
let retailer_cart_collapsed = false;
let memo_cart_collapsed = false;

// check if the button to expand/collapse the retailer cart has been pressed
retailer_collapse_button.addEventListener("click", () => {
    // if it is collapsed
    if (retailer_cart_collapsed) {
        expand_retailer_cart();

        // set toggle variable to false, meaning it is NOT collapsed -> expanded
        retailer_cart_collapsed = false;

    // if it is not collapsed, it is expanded
    } else {
        collapse_retailer_cart();

        // set toggle to true, meaning it IS collapsed
        retailer_cart_collapsed = true;
    }
});

// check if the button to expand/collapse the MEMO cart has been pressed
memo_collapse_button.addEventListener("click", () => {
    // if the cart is collapsed
    if (memo_cart_collapsed) {
        expand_memo_cart();

        // set toggle variable to false, meaning NOT collapsed -> expanded
        memo_cart_collapsed = false;

    // if it is not collapsed, it is expanded so we want to collapse it
    } else {
        collapse_memo_cart();


        // set toggle variable to true, indicating it has been collapsed
        memo_cart_collapsed = true;
    }
});


function collapse_retailer_cart() {
    retailer_cart_div.style = "height: 10vh";

    retailer_cart_header.style = "height: 100%";

    // change content of expand/collapse button to -
    retailer_collapse_button.innerHTML = "+";
}

function expand_retailer_cart() {
    retailer_cart_div.style = "height: 50vh";

    retailer_cart_header.style = "height: 20%";


    // change content of expand/collapse button to -
    retailer_collapse_button.innerHTML = "-";
}

function collapse_memo_cart() {
    memo_cart_div.style = "height: 10vh";

    // change content of expand/collapse button to -
    memo_collapse_button.innerHTML = "+";
}

function expand_memo_cart() {
    memo_cart_div.style = "height: 50vh";

    // change content of expand/collapse button to -
    memo_collapse_button.innerHTML = "-";
}
