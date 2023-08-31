import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


import { Trade } from '../models/Trade';

@Component({
  selector: 'app-trades-list',
  templateUrl: './trades-list.component.html',
  styleUrls: ['./trades-list.component.css']
})
export class TradesListComponent implements OnInit {

  @Input({ required: true })
  tradeList: Trade[] = [];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  dataSource: any;
  displayedColumns: string[] = ['lp', 'dateOpen', 'dateClose', 'type', 'openPrice',
    'closePrice', 'amount', 'profitLose', 'stopLoss', 'takeProfit'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Trade>(this.tradeList
      .map((item: any, index: number) => ({ ...item, lp: index + 1 })));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
