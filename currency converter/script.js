function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    var apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var exchangeRate = data.rates[toCurrency];
            var convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById('result').textContent = convertedAmount + ' ' + toCurrency;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
