import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { StartBotComponent } from './start-bot/start-bot.component';

const routes: Routes = [
  { path: 'chart', component: ChartWidgetComponent },
  { path: 'bot', component: StartBotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
