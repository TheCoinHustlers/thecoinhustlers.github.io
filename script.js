// Constants
const apiUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const apiKey = "9bfb8ab2-7a68-4724-8dc5-1ed2d83a25a7";
const currency = "USD";
const limit = 10;

// Function to fetch data from the CoinMarketCap API
async function fetchData() {
  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/${apiUrl}?CMC_PRO_API_KEY=${apiKey}&start=1&limit=${limit}&convert=${currency}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

// Function to update the page with cryptocurrency information
function updatePage(data) {
  const cryptocurrencyList = document.getElementById("cryptocurrency-list");
  cryptocurrencyList.innerHTML = ""; // Clear previous content

  data.forEach((crypto) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${crypto.name}: $${crypto.quote[currency].price.toFixed(2)}`;
    cryptocurrencyList.appendChild(listItem);
  });
}

// Function to handle periodic updates
async function periodicUpdate() {
  const data = await fetchData();
  updatePage(data);
}

// Initial fetch and update
periodicUpdate();

// Set up periodic updates (every 60 seconds)
setInterval(periodicUpdate, 60000);
