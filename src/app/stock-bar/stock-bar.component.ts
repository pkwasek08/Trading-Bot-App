import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-bar',
  templateUrl: './stock-bar.component.html',
  styleUrls: ['./stock-bar.component.css']
})
export class StockBarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({

      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR to USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "description": "Google",
          "proName": "NASDAQ:GOOGL"
        },
        {
          "description": "Tesla",
          "proName": "NASDAQ:TSLA"
        },
        {
          "description": "Apple",
          "proName": "NASDAQ:AAPL"
        }
      ],
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "en"
    });
    document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
  }
}
