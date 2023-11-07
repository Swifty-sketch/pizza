const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

let orderQuantity;
let orderName;
let orderTotal;
let inputElement = document.getElementById("svarInput");
let showText = document.getElementById("placeHolder").innerHTML

function checkOrderName() {
    orderName = inputElement.value;
    inputElement.value = ""; // Tar bort texten

    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) { // Kollar igenom ifall orderName är en av pizzorna
        document.getElementById("btn1").style.display = "none"; // Tar bort "checkOrderName" btn
        document.getElementById("btn2").style.display = "inline"; // Lägger till "fulFillOrder" btn, så att andra function kan köras.
        showText = "How many of " + orderName + " do you want?";
    } else {
        showText = "You have misspelled the chosen pizza, retry. You can choose between Vegetarian Pizza, Hawaiian Pizza, and Pepperoni Pizza";
    }
}

function fulFillOrder() { // Räknar ut värdet + skriver ut resultatet.
    orderQuantity = inputElement.value;
    orderQuantity = parseInt(orderQuantity);
    orderTotal = orderQuantity * pizzaPrice;

    showText = "Great, I'll get started on your " + orderName + " right away. It will cost " + orderTotal + "kr. " + calculateCookTime(orderQuantity);
}

function calculateCookTime(orderQuantity) {
    if (orderQuantity >= 1 && orderQuantity <= 2) {
        return "The order will take 10 minutes.";
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return "The order will take 15 minutes.";
    } else { // Om det är 6+ pizzor
        return "The order will take 20 minutes.";
    }
}