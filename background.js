chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ stockSymbol: 'AAPL' }); // Varsayılan hisse senedi sembolü
});

// chrome.alarms.create('refreshPrice', { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'refreshPrice') {
    chrome.storage.local.get('stockSymbol', (data) => {
      fetch(`http://127.0.0.1:5000/stock/${data.stockSymbol}/price`)
        .then((response) => response.json())
        .then((priceData) => {
          chrome.action.setBadgeText({ text: priceData.price.toString() });
        });
    });
  }
});
