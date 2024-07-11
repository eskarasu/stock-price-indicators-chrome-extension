# Stock Price Indicators

This project includes a Chrome extension and a Flask server that displays the price of a specified stock symbol.

## Files

- `background.js`: Background script for the Chrome extension.
- `manifest.json`: Configuration file for the extension.
- `popup.html`: User interface of the extension.
- `popup.js`: JavaScript code for the popup interface.
- `server.py`: Flask server to fetch stock prices.

## Setup

1. Clone this project to your local machine:
   ```bash
   git clone https://github.com/username/stock-price-indicators.git
   cd stock-price-indicators
2. Install the required dependencies for the Flask server:
   pip install flask yfinance
3. Start the Flask server:
   python server.py
4. To load the Chrome extension, go to chrome://extensions/ in Chrome, enable Developer mode, and click Load unpacked. Select your project directory.

## Usage

1. Enter a stock symbol in the popup interface and click Submit.
2. The stock price will be displayed in the popup interface.

## License

This project is licensed under the MIT License. See the LICENSE file for details.




