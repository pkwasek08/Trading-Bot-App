import { Component, OnInit } from '@angular/core';
import { NewBotResponse } from '../models/NewBotResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RsiBotService } from '../services/rsiBot.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';
import { AnimationEvent } from "@angular/animations";
import { MatDialog } from '@angular/material/dialog';
import { ChartBudgetComponent } from '../chart-budget/chart-budget.component';

@Component({
  selector: 'app-start-bot',
  templateUrl: './start-bot.component.html',
  styleUrls: ['./start-bot.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('shown', style({
        transform: 'translate(calc(-25% + 5vw), calc(-20% + 5vh)) scale(0.7)'
      })),
      state('hidden', style({
        transform: 'translateX(0%)'
      })),
      transition('shown => hidden', animate('1s ease-in-out')),
      transition('hidden => shown', animate('1s ease-in-out'))
    ])
  ],

})
export class StartBotComponent implements OnInit {
  animationDone$: Subject<AnimationEvent> = new Subject<AnimationEvent>();
  isShowSpinner = false;
  form!: FormGroup;
  newBotResponse: NewBotResponse = new NewBotResponse;
  stockList: string[] = [];
  responseFromBackend: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private rsiBotService: RsiBotService) {
    this.initForm();
    this.stockList = ["TSLA", "AAPL", "GOOGL"];
  }
  ngOnInit(): void { }

  onClickSubmitBtn() {
    if (this.form.valid && this.dateValidation()) {
      this.isShowSpinner = true;
      console.log('Form submitted successfully');
      this.rsiBotService.startRsiBot(this.form.value).subscribe(
        {
          next: (v) => {
            this.newBotResponse = v;
            this.responseFromBackend = true

          },
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

  onClickRestartBtn() {
    this.initForm();
    this.responseFromBackend = false;
    this.animationDone$ = new Subject<AnimationEvent>();
  }

  onAnimationDone(event: AnimationEvent) {
    this.animationDone$.next(event);
  }

  getFinalResultBudget() {
    return Math.round((this.newBotResponse.budgetAfter - this.newBotResponse.budgetBefore) * 100) / 100;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ChartBudgetComponent, { width: '700px' });
    let instance = dialogRef.componentInstance;
    instance.budget = this.newBotResponse.budgetBefore;
    instance.tradeList = this.newBotResponse.tradeList;
  }

  private initForm() {
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
      amount: ['', Validators.required]
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
