import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { StartBotComponent } from './start-bot/start-bot.component';
import { BotsHistoryComponent } from './bots-history/bots-history.component';

const routes: Routes = [
  { path: 'chart', component: ChartWidgetComponent },
  { path: 'bot', component: StartBotComponent },
  { path: 'history', component: BotsHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
