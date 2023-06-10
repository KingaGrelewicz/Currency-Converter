console.log("Hello World!")

let formElement = document.querySelector(".js-formElement");
let currnecyElement = document.querySelector(".js-currencyElement");
let amountElement = document.querySelector(".js-amountElement");
let outputAmount = document.querySelector(".js-outputAmount");

let EUR = 4.47;
let USD = 4.15;
let CHF = 4.61;
let JPY = 2.97;
let CZK = 0.19;
let NOK = 0.38;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;
    let result = outputAmount.value;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "CHF":
            result = amount / CHF;
            break;

        case "JPY":
            result = amount / JPY;
            break;

        case "CZK":
            result = amount / CZK;
            break;

        case "NOK":
            result = amount / NOK;
            break;
    }
    outputAmount.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});