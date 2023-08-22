import { Component, OnInit } from '@angular/core';
import { BotDetails } from '../models/BotDetails';
import { BotService } from '../services/bot.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bots-history',
  templateUrl: './bots-history.component.html',
  styleUrls: ['./bots-history.component.css']
})
export class BotsHistoryComponent implements OnInit {
  botsDetailsList: BotDetails[] = [];
  isShowSpinner: boolean = false;
  deleteBotId: any;
  constructor(
    private botsService: BotService,
    private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.isShowSpinner = true;
    this.botsService.getHistoryBots().subscribe(
      {
        next: (v) => {
          this.botsDetailsList = v;
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
          const indexToRemove = this.botsDetailsList.findIndex(item => item.id === id);
          if (indexToRemove !== -1) {
            this.botsDetailsList.splice(indexToRemove, 1);
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
}
