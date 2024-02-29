"use strict";

const regular_collapse_button = document.getElementById("regular-collapse");
const memo_collapse_button = document.getElementById("memo-collapse");

const regular_cart_div = document.querySelector(".regular-cart");
const memo_cart_div = document.querySelector(".memo-cart");

let regular_cart_collapsed = false;
let memo_cart_collapsed = false;

regular_collapse_button.addEventListener("click", () => {
    if (regular_cart_collapsed) {
        regular_cart_div.style = "height: 50vh";
        regular_cart_collapsed = false;
    } else {
        regular_cart_div.style = "height: 10vh";
        regular_cart_collapsed = true;
    }
});


memo_collapse_button.addEventListener("click", () => {
    if (memo_cart_collapsed) {
        memo_cart_div.style = "height: 50vh";
        memo_cart_collapsed = false;
    } else {
        memo_cart_div.style = "height: 10vh";
        memo_cart_collapsed = true;
    }
});
