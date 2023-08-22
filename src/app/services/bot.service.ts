import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BotDetails } from '../models/BotDetails';

@Injectable({
  providedIn: 'root'
})
export class BotService {
  apiUrl = environment.apiUrl + 'bot';

  constructor(private http: HttpClient) { }

  getHistoryBots(): Observable<BotDetails[]> {
    return this.http.get<BotDetails[]>(this.apiUrl);
  }

}
