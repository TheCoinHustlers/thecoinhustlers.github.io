// Use CORS Anywhere as a prefix
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = `${corsProxyUrl}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=9bfb8ab2-7a68-4724-8dc5-1ed2d83a25a7&start=1&limit=10&convert=USD`;

// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const { data } = await response.json();

        // Log the entire data for inspection
        console.log('Cryptocurrency Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function
fetchData();
