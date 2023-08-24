// Get references to the HTML elements
const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");
const convertButton = document.getElementById("convert");
const resultOutput = document.getElementById("result");

// Exchange rates as of the knowledge cutoff date in September 2021
const exchangeRates = {
    USD: 73.5, // 1 USD to INR
    EUR: 86.5, // 1 EUR to INR
    CAD: 58.2, // 1 CAD to INR
    JPY: 0.67  // 1 JPY to INR
};

// Add an event listener to the "convert" button
convertButton.addEventListener("click", () => {
    const selectedCurrency = currencySelect.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount)) {
        resultOutput.innerText = "Please enter a valid amount.";
    } else if (selectedCurrency === "INR") {
        resultOutput.innerText = "Converted amount: " + amount + " INR";
    } else if (exchangeRates[selectedCurrency]) {
        const convertedAmount = amount * exchangeRates[selectedCurrency];
        resultOutput.innerText =
            "Converted amount: " + convertedAmount.toFixed(2) + " INR";
    } else {
        resultOutput.innerText = "Currency not supported.";
    }
});
