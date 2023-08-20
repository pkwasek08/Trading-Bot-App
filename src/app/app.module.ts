import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { StockBarComponent } from './stock-bar/stock-bar.component';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { StartBotComponent } from './start-bot/start-bot.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LOCALE_ID } from '@angular/core';
import { ChartBudgetComponent } from './chart-budget/chart-budget.component';
import { NgChartsModule } from 'ng2-charts';
import { MatDialogModule } from '@angular/material/dialog';

const materialForm = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StockBarComponent,
    ChartWidgetComponent,
    StartBotComponent,
    ChartBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatInputModule,
    materialForm,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    NgChartsModule
  ],
  exports: [materialForm],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
