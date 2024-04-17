"use strict";

// DOM references to the retailer cart div and MEMO cart div
const retailer_cart_div = document.querySelector(".retailer-cart");
const memo_cart_div = document.querySelector(".memo-cart");

// DOM references to the headers inside the retailer and MEMO carts
const retailer_cart_header = document.getElementById("retailer-cart-header");
const memo_cart_header = document.getElementById("memo-cart-header");

// DOM references to the footers inside the retailer and MEMO carts
const retailer_cart_footer = document.getElementById("retailer-cart-footer");
const memo_cart_footer = document.getElementById("memo-cart-footer");

// DOM references to buttons that expand/collapse the retailer cart and MEMO cart
const retailer_collapse_button = document.getElementById("retailer-collapse");
const memo_collapse_button = document.getElementById("memo-collapse");

// DOM references to divs that contain items in retailer and MEMO carts
const retailer_items_div = document.querySelector(".retailer-items");
const memo_items_div = document.querySelector(".memo-items");

// DOM references to checkout buttons
const retailer_checkout_button = document.getElementById("retailer-checkout-button");
const memo_checkout_button = document.getElementById("memo-checkout-button");

// DOM references to the retailer and MEMO cart totals
const retailer_cart_total = document.getElementById("retailer-cart-total");
const memo_cart_total = document.getElementById("memo-cart-total");

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

    retailer_cart_footer.style = "display: none";

    // change content of expand/collapse button to -
    retailer_collapse_button.innerHTML = "+";
}

function expand_retailer_cart() {
    retailer_cart_div.style = "height: 42vh";

    retailer_cart_header.style = "height: 20%";

    retailer_cart_footer.style = "display: inline-flex";

    // change content of expand/collapse button to -
    retailer_collapse_button.innerHTML = "-";
}

function collapse_memo_cart() {
    memo_cart_div.style = "height: 10vh";

    memo_cart_header.style = "height: 100%";

    memo_cart_footer.style = "display: none";

    // change content of expand/collapse button to -
    memo_collapse_button.innerHTML = "+";
}

function expand_memo_cart() {
    memo_cart_div.style = "height: 42vh";

    memo_cart_header.style = "height: 20%";

    memo_cart_footer.style = "display: inline-flex";

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
        
        update_retailer_cart_total();
        update_memo_cart_total();
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

// function to upate the retailer cart total
function update_retailer_cart_total() {
    // create a mutable variable that stores the running total of items in the cart
    let total = 0;

    console.log(retailer_items_div.childNodes);

    retailer_items_div.childNodes.forEach((element, index) => {
        const price_element = element.childNodes[2].childNodes[0];

        // get the text inside the price element in the form "Price: $5,966.00"
        const price_html = price_element.innerText;

        // get the number after dollar sign and remove commas
        const price_formatted = price_html.split("$")[1].replace(",", "");

        // convert the price that is formatted and ready to be converted into a decimal
        const price_decimal = parseFloat(price_formatted);

        // increase the total by the price of the current item
        total += price_decimal;
    });

    // add commas back into the decimal to separate thousands
    total = total.toLocaleString();

    // add the dollar sign back on the front of the total
    total = "$" + total;

    // set the total of this cart to the calculated total
    retailer_cart_total.innerHTML = `Pay Today: ${total}`;
}


// function to upate the MEMO cart total
function update_memo_cart_total() {
    // create a mutable variable that stores the running total of items in the cart
    let total = 0;

    memo_items_div.childNodes.forEach((element, index) => {
        const price_element = element.childNodes[2].childNodes[0];

        // get the text inside the price element in the form "Price: $5,966.00"
        const price_html = price_element.innerText;

        // get the number after dollar sign and remove commas
        const price_formatted = price_html.split("$")[1].replace(",", "");

        // convert the price that is formatted and ready to be converted into a decimal
        const price_decimal = parseFloat(price_formatted);

        // increase the total by the price of the current item
        total += price_decimal;
    });

    // add commas back into the decimal to separate thousands
    total = total.toLocaleString();

    // add the dollar sign back on the front of the total
    total = "$" + total;

    // set the total of this cart to the calculated total
    memo_cart_total.innerHTML = `Pay Today: $0.00`;
}

// link retailer checkout buton to the retailer's checkout
retailer_checkout_button.addEventListener("click", () => {
    alert("checking out with retailer");
});

// link the MEMO checkout button to MEMO's checkout
memo_checkout_button.addEventListener("click", () => {
    alert("checking out with MEMO");
});



// ADD IN FAKE PRODUCTS FOR DEMO
append_product_retailer_cart("https://www.experiencememo.com/images/product_images/1_5cf651586be7119-06-04-07-09-12-0.jpg",
                            "Amusez",
                            "Amazonite Cuff Links",
                            "$5,966.00");

append_product_retailer_cart("https://www.experiencememo.com/images/product_images/1_657e375cec25423-12-16-06-48-44-0.jpg",
                            "Amy Gregg",
                            "Double Icicle Drop Earring",
                            "$3,620.00");

append_product_retailer_cart("https://www.experiencememo.com/images/product_images/1_5a95679b4047d18-02-27-09-13-47-0.jpg",
                            "Julez Bryant",
                            "Medium Orms Hoop Earrings with Diamond Drop",
                            "$2,200.00");


append_product_memo_cart("https://www.experiencememo.com/images/product_images/1_654d2a91508a323-11-09-01-53-05-0.jpg",
                        "LALAOUNIS",
                        "Snake Wrap Ring with Sapphire",
                        "$1,500.00");

append_product_memo_cart("https://www.experiencememo.com/images/product_images/1_638635d45531122-11-29-11-39-48-0.jpg",
                        "ILEANA MAKRI",
                        "Grass Seed Emerald Drop Earrings",
                        "$6,010.00");

append_product_memo_cart("https://www.experiencememo.com/images/product_images/1_5aa97f80c0c8a18-03-14-04-01-04-0.jpg",
                        "JANE TAYLOR",
                        "Baguette White Topaz Single Drop Earrings in Yellow Gold",
                        "$1,000.00");
    
append_product_memo_cart("https://www.experiencememo.com/images/product_images/1_656099b44d8df23-11-24-07-40-20-0.jpg",
                        "LINDA HOJ ",
                        "Eilifr Cross Necklace",
                        "$4,250.00");

update_retailer_cart_total();
update_memo_cart_total();


