"use strict";

// DOM references to the retailer cart div and MEMO cart div
const retailer_cart_div = document.querySelector(".retailer-cart");
const memo_cart_div = document.querySelector(".memo-cart");

// DOM regerences to the headers inside the retailer and MEMO carts
const retailer_cart_header = document.getElementById("retailer-cart-header");
const memo_cart_header = document.getElementById("memo-cart-header");

// DOM references to buttons that expand/collapse the retailer cart and MEMO cart
const retailer_collapse_button = document.getElementById("retailer-collapse");
const memo_collapse_button = document.getElementById("memo-collapse");

// DOM references to divs that contain items in retailer and MEMO carts
const retailer_items_div = document.querySelector(".retailer-items");
const memo_items_div = document.querySelector(".memo-items");

// DOM references to checkout buttons
const retailer_checkout_button = document.getElementById("retailer-checkout-button");
const memo_checkout_button = document.getElementById("memo-checkout-button");

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
    retailer_cart_div.style = "height: 42vh";

    retailer_cart_header.style = "height: 20%";


    // change content of expand/collapse button to -
    retailer_collapse_button.innerHTML = "-";
}

function collapse_memo_cart() {
    memo_cart_div.style = "height: 10vh";

    memo_cart_header.style = "height: 100%";

    // change content of expand/collapse button to -
    memo_collapse_button.innerHTML = "+";
}

function expand_memo_cart() {
    memo_cart_div.style = "height: 42vh";

    memo_cart_header.style = "height: 20%";

    // change content of expand/collapse button to -
    memo_collapse_button.innerHTML = "-";
}

// function that returns an array of items in the retailer cart div
// fix so no need for mod 2 == 1 in assigning event listeners
function get_retailer_items() {
    return retailer_items_div.childNodes;
}

// function that returns an array of items in the memo cart div
function get_memo_items() {
    return memo_items_div.childNodes;
}

// function that deletes the item of which the close button that was pressed is located
function delete_item(close_button) {
    close_button.parentNode.remove();
}

// function that assigns event listeners to every close button in all items
function assign_close_event_listeners() {
    get_retailer_items().forEach((element, index) => {
        if (index % 2 == 1) {
            element.childNodes[7].addEventListener("click", () => delete_item(element.childNodes[7]));
        }
    });

    get_memo_items().forEach((element, index) => {
        if (index % 2 == 1) {
            element.childNodes[7].addEventListener("click", () => delete_item(element.childNodes[7]));
        }
    });
}
assign_close_event_listeners();


function assign_close_event_listener(item) {
    item.childNodes[3].addEventListener("click", () => {
        delete_item(item.childNodes[3]);
    });
}

// function to append a product to the retailer's cart
function append_product_retailer_cart(image_url, item_name, item_description, price) {
    // IMAGE
    const item_div = document.createElement("div");
    item_div.classList.add("item");

    const item_image = document.createElement("div");
    item_image.classList.add("item-image");
    
    const item_image_img = document.createElement("img");
    item_image_img.src = image_url;

    item_image.appendChild(item_image_img);
    item_div.appendChild(item_image);


    // NAME AND DESC
    const item_name_description_div = document.createElement("div");
    item_name_description_div.classList.add("item-name-description");

    const item_name_h3 = document.createElement("h3");
    item_name_h3.innerHTML = item_name;

    const item_description_p = document.createElement("p");
    item_description_p.innerHTML = item_description;

    item_name_description_div.appendChild(item_name_h3);
    item_name_description_div.appendChild(item_description_p);
    item_div.appendChild(item_name_description_div);

    // PRICE
    const item_price_div = document.createElement("div");
    item_price_div.classList.add("prices");

    const price_p = document.createElement("p");
    price_p.innerHTML = `Price: ${price}`;
    price_p.id = "purchase";

    item_price_div.appendChild(price_p);
    item_div.appendChild(item_price_div);


    // REMOVE BUTTON
    const remove_item_div = document.createElement("div");
    remove_item_div.id = "remove-item";

    item_div.appendChild(remove_item_div);


    // ADD TO ITEMS DIV
    retailer_items_div.prepend(item_div);

    assign_close_event_listener(item_div);
}

// function to append a product to the HTO cart
function append_product_memo_cart(image_url, item_name, item_description, price) {
    // IMAGE
    const item_div = document.createElement("div");
    item_div.classList.add("item");

    const item_image = document.createElement("div");
    item_image.classList.add("item-image");
    
    const item_image_img = document.createElement("img");
    item_image_img.src = image_url;

    item_image.appendChild(item_image_img);
    item_div.appendChild(item_image);

    // NAME AND DESC
    const item_name_description_div = document.createElement("div");
    item_name_description_div.classList.add("item-name-description");

    const item_name_h3 = document.createElement("h3");
    item_name_h3.innerHTML = item_name;

    const item_description_p = document.createElement("p");
    item_description_p.innerHTML = item_description;

    item_name_description_div.appendChild(item_name_h3);
    item_name_description_div.appendChild(item_description_p);
    item_div.appendChild(item_name_description_div);

    // PRICE
    const item_price_div = document.createElement("div");
    item_price_div.classList.add("prices");

    const purchase_p = document.createElement("p");
    purchase_p.innerHTML = `Purchase price: ${price}`;
    purchase_p.id = "purchase";

    const today_p = document.createElement("p");
    today_p.innerHTML = `Pay today: $0.00`;

    item_price_div.appendChild(purchase_p);
    item_price_div.appendChild(today_p);

    item_div.appendChild(item_price_div);

    // REMOVE ITEM BUTTON
    const remove_item_div = document.createElement("div");
    remove_item_div.id = "remove-item";

    item_div.appendChild(remove_item_div);

    // ADD TO ITEMS DIV
    memo_items_div.prepend(item_div);

    assign_close_event_listener(item_div);
}

append_product_memo_cart("https://www.google.com/imgres?imgurl=https%3A%2F%2Fres.cloudinary.com%2Fkendra-scott%2Fimage%2Fupload%2Fq_auto%2Cf_auto%2Cdpr_auto%2Fw_640%2Ch_800%2Cc_fit%2FCatalogs%2Fkendrascott%2FHoliday-1-2023%2FProduct-Images%2Fkendra-scott-framed-ari-heart-short-pendant-necklace-gold-ruby-oparex-opal-00.jpg&tbnid=Ad2SRYPCax56RM&vet=12ahUKEwiIrpyX2dOEAxULMUQIHXNDA_0QMygAegUIARChAg..i&imgrefurl=https%3A%2F%2Fwww.kendrascott.com%2Fshop-by%2Fgemstone-glamour%2Fframed-ari-heart-gold-short-pendant-necklace-in-red-opalescent-resin%2F196088563435.html&docid=fM7jPgZgANKYQM&w=640&h=800&q=necklace&ved=2ahUKEwiIrpyX2dOEAxULMUQIHXNDA_0QMygAegUIARChAg", "Test product", "lorem ipsum dolor sit amet lorem ipsum", "$1900.00");

// link retailer checkout buton to the retailer's checkout
retailer_checkout_button.addEventListener("click", () => {
    alert("checking out with retailer");
});

// link the MEMO checkout button to MEMO's checkout
memo_checkout_button.addEventListener("click", () => {
    alert("checking out with MEMO");
});
