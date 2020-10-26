import { TdaMockData } from './../../../core/data/mock-data/app.mock-data';
import { Tda } from './../../../core/data/models/app.models';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RestService } from 'src/app/core/services/rest.service';

@Injectable({
  providedIn: 'root',
})
export class TdaService {
  constructor(private restService: RestService) {}

  getTda(): Observable<Tda> {
    // return this.restService.get<Tda>( `/api/tda`);
    return of(TdaMockData)
  }
}
