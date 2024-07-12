document.addEventListener('DOMContentLoaded', function() {
  var refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', function() {
    var stockSymbol = document.getElementById('stockInput').value;
    fetch(`http://localhost:5000/stock/${stockSymbol}/price`)
      .then((response) => response.json())
      .then((priceData) => {
        document.getElementById('priceDisplay').textContent = `Value: ${priceData.price}`;
      });
  });
});
