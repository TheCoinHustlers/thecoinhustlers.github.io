const apiKey = '9bfb8ab2-7a68-4724-8dc5-1ed2d83a25a7';
const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

document.addEventListener('DOMContentLoaded', () => {
    fetch(`${apiUrl}?CMC_PRO_API_KEY=${apiKey}&start=1&limit=10&convert=USD`)
        .then(response => response.json())
        .then(data => {
            const cryptoDataElement = document.getElementById('crypto-data');
            const cryptoList = data.data;

            const listItems = cryptoList.map(crypto => {
                return `<li>${crypto.name}: $${crypto.quote.USD.price.toFixed(2)}</li>`;
            });

            cryptoDataElement.innerHTML = `<ul>${listItems.join('')}</ul>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please check the console for details.');
        });
});
