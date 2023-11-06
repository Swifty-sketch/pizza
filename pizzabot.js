const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

let pizzaPrice = 80;
let orderQuantity;
let orderName;
let orderTotal;
let inputElement = document.getElementById("svarInput");

function svarBtn() {
    orderName = inputElement.value;
    inputElement.value = "";

    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "inline";
        document.getElementById("placeHolder").innerHTML = "How many of " + orderName + " do you want?";
    } else {
        document.getElementById("placeHolder").innerHTML = "You have misspelled the chosen pizza, retry. You can choose between Vegetarian Pizza, Hawaiian Pizza, and Pepperoni Pizza";
        svarBtn()
    }
}

function svarBtn2() {
    orderQuantity = inputElement.value;
    orderQuantity = parseInt(orderQuantity);
    orderTotal = orderQuantity * pizzaPrice;
    document.getElementById("placeHolder").innerHTML = "Great, I'll get started on your " + orderName + " right away. It will cost " + orderTotal + "kr. " + calculateCookTime(orderQuantity);
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