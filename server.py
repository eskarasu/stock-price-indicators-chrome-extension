from flask import Flask, jsonify
import yfinance as yf

app = Flask(__name__)

@app.route('/stock/<symbol>/price')
def get_stock_price(symbol):
    ticker = yf.Ticker(symbol)
    hist = ticker.history(period="1d")
    return jsonify(price=hist['Close'].iloc[-1])

if __name__ == '__main__':
    app.run(debug=True)
