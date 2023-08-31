import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewBot } from '../models/NewBot';
import { NewBotResponse } from '../models/NewBotResponse';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BBandsBotService {
  apiUrl = environment.apiUrl + 'bot/startBBandsBot';

  constructor(private http: HttpClient) { }

  startBbandsBot(bot: NewBot): Observable<NewBotResponse> {
    return this.http.post(this.apiUrl, bot).pipe(
      map((response: any) => {
        const newBotResponse: NewBotResponse = {
          parameters: response.result.parameters,
          budgetBefore: response.result.budgetBefore,
          budgetAfter: response.result.budgetAfter,
          tradeList: response.result.tradeList
        };
        return newBotResponse;
      })
    );
  }
}
