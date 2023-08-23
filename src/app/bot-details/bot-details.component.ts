import { Component, OnInit } from '@angular/core';
import { BotService } from '../services/bot.service';
import { BotDetails } from '../models/BotDetails';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bot-details',
  templateUrl: './bot-details.component.html',
  styleUrls: ['./bot-details.component.css']
})
export class BotDetailsComponent implements OnInit {
  botDetails?: BotDetails;
  constructor(
    private botService: BotService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.botDetails = this.botService.botDetails;
    if (this.botDetails == null) {
      this.snackBar.open('Something went wrong :(', 'x', {
        panelClass: 'custom-css-class-error',
        duration: 10000,
      });
    }
  }

  parseParameters(parameters: string): any {
    return JSON.parse(parameters);
  }
}
