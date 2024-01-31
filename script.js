// Replace the existing script.js content with this

// CoinMarketCap API Key
const apiKey = "9bfb8ab2-7a68-4724-8dc5-1ed2d83a25a7";

// CoinMarketCap API URL
const apiUrl = `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}&start=1&limit=10&convert=USD`;

// Function to fetch data from the API and update the webpage
async function fetchDataAndUpdatePage() {
    try {
        const response = await fetch(apiUrl);
        const { data } = await response.json();

        // Get the ul element to append list items
        const cryptoList = document.getElementById('crypto-names');

        // Append list items for each cryptocurrency
        data.forEach(crypto => {
            const listItem = document.createElement('li');
            listItem.textContent = crypto.name;
            cryptoList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchDataAndUpdatePage function
fetchDataAndUpdatePage();
