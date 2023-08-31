import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { StartBotComponent } from './start-bot/start-bot.component';
import { BotsHistoryComponent } from './bots-history/bots-history.component';
import { BotDetailsComponent } from './bot-details/bot-details.component';
import { StrategyDetailsComponent } from './strategy-details/strategy-details.component';

const routes: Routes = [
  { path: '', component: StrategyDetailsComponent },
  { path: 'chart', component: ChartWidgetComponent },
  { path: 'bot', component: StartBotComponent },
  { path: 'history', component: BotsHistoryComponent },
  { path: 'botDetails', component: BotDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
