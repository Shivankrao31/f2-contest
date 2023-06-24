const apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
const cryptoTable = document.getElementById("cryptoTable");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const sortButton = document.getElementById("sortButton");

// Fetch data using .then
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => renderTable(data))
  .catch((error) => console.log(error));

// Fetch data using async/await
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderTable(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// Render data in table
function renderTable(data) {
  const tbody = cryptoTable.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  data.forEach((crypto, index) => {
    const { name, id, symbol, current_price, total_volume, market_cap, price_change_percentage_24h } = crypto;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${name}</td>
      <td>${symbol}</td>
      <td>${current_price}</td>
      <td>${total_volume}</td>
      <td>${market_cap}</td>
      <td>${price_change_percentage_24h}</td>
    `;

    tbody.appendChild(row);
  });
}

// Search button event handler
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const rows = cryptoTable.getElementsByTagName("tr");
});
