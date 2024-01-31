const apiKey = '9bfb8ab2-7a68-4724-8dc5-1ed2d83a25a7'; // Replace with your actual API key
const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

// Make a GET request to CoinMarketCap API
fetch(`${apiUrl}?CMC_PRO_API_KEY=${apiKey}&start=1&limit=10&convert=USD`)
    .then(response => response.json())
    .then(data => {
        // Process the data and update your HTML
        const cryptoDataElement = document.getElementById('crypto-data');
        const cryptoList = data.data;

        // Create a simple list, you can customize this as needed
        const listItems = cryptoList.map(crypto => {
            return `<li>${crypto.name}: $${crypto.quote.USD.price.toFixed(2)}</li>`;
        });

        cryptoDataElement.innerHTML = `<ul>${listItems.join('')}</ul>`;
    })
    .catch(error => console.error('Error fetching data:', error));
