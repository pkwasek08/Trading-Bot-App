import { Component, OnInit, ViewChild } from '@angular/core';
import { BotDetails } from '../models/BotDetails';
import { BotService } from '../services/bot.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-bots-history',
  templateUrl: './bots-history.component.html',
  styleUrls: ['./bots-history.component.css']
})
export class BotsHistoryComponent implements OnInit {
  botsDetailsList: BotDetails[] = [];
  isShowSpinner: boolean = false;
  deleteBotId: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<BotDetails>;
  displayedColumns: string[] = ['name', 'strategy', 'createDate', 'pairStock', 'budget',
    'resultValue', 'resampleFreq', 'startDate', 'endDate', 'parameters', 'action'];

  constructor(
    private botsService: BotService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.isShowSpinner = true;
    this.botsService.getHistoryBots().subscribe(
      {
        next: (v) => {
          this.dataSource = new MatTableDataSource<any>(v);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (error) => {
          this.snackBar.open(error.status + ' error :(', 'x', {
            panelClass: 'custom-css-class-error',
            duration: 5000,
          });
          this.isShowSpinner = false;
        },
        complete: () => {
          this.isShowSpinner = false;
        }
      });
  }

  parseParameters(parameters: string): any {
    return JSON.parse(parameters);
  }

  onClickRemoveBot(id: number) {
    this.deleteBotId = id;
    this.botsService.removeBot(id).subscribe({
      next: (v) => {
        if (v === true) {
          this.snackBar.open('The BOT has been removed', 'x', {
            panelClass: 'custom-css-class-success',
            duration: 5000,
          });
          const indexToRemove = this.dataSource.data.findIndex(item => item.id === id);
          if (indexToRemove !== -1) {
            this.dataSource.data.splice(indexToRemove, 1);
            this.dataSource.data = [...this.dataSource.data];
          }
        } else {
          this.snackBar.open('Something went wrong :(', 'x', {
            panelClass: 'custom-css-class-error',
            duration: 5000,
          });
        }
      },
      error: (error) => {
        this.snackBar.open(error.status + ' error :(', 'x', {
          panelClass: 'custom-css-class-error',
          duration: 5000,
        });
        this.deleteBotId = null;
      },
      complete: () => {
        this.deleteBotId = null;
      }
    })
  }

  openBotDetails(botDetails: BotDetails) {
    this.botsService.botDetails = botDetails;
    this.router.navigate(['/botDetails']);
  }
}
