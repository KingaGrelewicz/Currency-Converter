{
    const welcome = () => {
        console.log("Hello World!")
    };

    const calculateResult = (amount, currency) => {
        const EUR = 4.47;
        const USD = 4.15;
        const CHF = 4.61;
        const JPY = 2.97;
        const CZK = 0.19;
        const NOK = 0.38;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "CHF":
                return amount / CHF;

            case "JPY":
                return amount / JPY;

            case "CZK":
                return amount / CZK;

            case "NOK":
                return amount / NOK;
        }

        welcome();
    };

    const updateResultText = (amount, result, currency) => {
        const outputAmount = document.querySelector(".js-outputAmount");
        outputAmount.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currnecyElement = document.querySelector(".js-currencyElement");
        const amountElement = document.querySelector(".js-amountElement");

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-formElement");
        formElement.addEventListener("submit", onFormSubmit);
    };



    init();
}