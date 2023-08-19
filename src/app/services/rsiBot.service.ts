import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewBot } from '../models/newBot';
@Injectable({
  providedIn: 'root'
})
export class RsiBotService {
  apiUrl = environment.apiUrl + 'bot/startRsiBot';

  constructor(private http: HttpClient) { }

  startRsiBot(bot: NewBot) {
    return this.http.post(this.apiUrl, bot);
  }

}
