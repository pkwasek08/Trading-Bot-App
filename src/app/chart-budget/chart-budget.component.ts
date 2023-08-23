import { Component, Inject, OnInit, Input } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { Trade } from '../models/Trade';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-chart-budget',
  templateUrl: './chart-budget.component.html',
  styleUrls: ['./chart-budget.component.css']
})
export class ChartBudgetComponent implements OnInit {
  @Input({ required: true })
  public tradeList: Trade[] = [];
  @Input({ required: true })
  public budget: number = 0;
  public lineChartData: ChartDataset[] = [
    { data: [], label: 'Price' }
  ];
  public lineChartLegend = true;
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor() { }

  ngOnInit(): void {
    if (this.tradeList && this.tradeList.length > 0) {
      this.lineChartData = [
        {
          data: this.tradeList.map(trade => this.budget + trade.profitLose),
          label: 'Profit',
          type: 'line',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
      ];
      this.lineChartLabels = this.tradeList.map(trade => format(parseISO(trade.dateClose.toString()), 'dd-MM-yyyy'));
    }
  }
}
