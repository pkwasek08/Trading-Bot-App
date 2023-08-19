import { Component, OnInit } from '@angular/core';
import { NewBot } from '../models/newBot';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RsiBotService } from '../services/rsiBot.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-start-bot',
  templateUrl: './start-bot.component.html',
  styleUrls: ['./start-bot.component.css']
})
export class StartBotComponent implements OnInit {
  public isShowSpinner = false;
  public form!: FormGroup;
  public newBot: NewBot = new NewBot;
  public stockList: string[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private rsiBotService: RsiBotService) {
    this.initForm();
    this.stockList = ["TSLA", "AAPL", "GOOGL", "BTC"];
  }
  ngOnInit(): void { }

  onClickSubmitBtn() {
    if (this.form.valid && this.dateValidation()) {
      this.isShowSpinner = true;
      console.log('Form submitted successfully');
      this.rsiBotService.startRsiBot(this.form.value).subscribe(
        {
          next: (v) => console.log(v),
          error: (error) => {
            this.snackBar.open(error.status + ' error :(', 'x', {
              panelClass: 'custom-css-class-error',
              duration: 5000,
            });
            this.isShowSpinner = false;
          },
          complete: () => {
            this.snackBar.open('The BOT simulation has been completed', 'x', {
              panelClass: 'custom-css-class-success',
              duration: 5000,
            });
            this.isShowSpinner = false;
          }
        });
    }
  }

  initForm() {
    this.form = this.fb.group({
      botSet: ['NEW_BOT', Validators.required],
      name: ['', Validators.required],
      stock: ['', Validators.required],
      resampleFreq: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', [Validators.required]],
      budget: ['', Validators.required],
      rsiHeightLevel: ['', Validators.required],
      rsiLowLevel: ['', Validators.required],
      stopLoss: [''],
      takeProfit: [''],
    });
  }


  private dateValidation(): boolean {
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;
    if (startDate && endDate && startDate <= endDate) {
      return true;
    }

    this.snackBar.open('End date must be greater than or equal to start date', 'x', {
      panelClass: 'custom-css-class-warming',
      duration: 5000,
    });
    return false;
  }

}
