import { Component, OnInit } from '@angular/core';

declare var TradingView: any; // Dodaj deklarację dla obiektu TradingView

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.css']
})
export class ChartWidgetComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = () => {
      new TradingView.widget({
        autosize: true,
        symbol: 'NASDAQ:AAPL',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: 'chart-widget'
      });
    };

    document.body.appendChild(script);
  }
}