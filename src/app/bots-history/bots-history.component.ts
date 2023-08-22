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
}
