import { Component, OnInit } from '@angular/core';
import { NewBot } from '../models/newBot';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-bot',
  templateUrl: './start-bot.component.html',
  styleUrls: ['./start-bot.component.css']
})
export class StartBotComponent implements OnInit {
  public isShowSpinner = false;
  public form: FormGroup;
  public newBot: NewBot = new NewBot;
  public stockList: string[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      botSet: ['NEW_BOT', Validators.required],
      name: ['', Validators.required],
      stock: ['', Validators.required],
      resampleFreq: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      budget: ['', Validators.required],
      rsiHeightLevel: ['', Validators.required],
      rsiLowLevel: ['', Validators.required],
      stopLoss: [''],
      takeProfit: ['']
    });

    this.stockList = ["TSLA", "AAPL", "GOOGL", "BTC"];
  }
  ngOnInit(): void {
  }

  onClickSubmitBtn() {
    if (this.form.valid) {
      console.log('Form submitted successfully');
    } 
  }

  onClickResetBtn() {
  }
}
