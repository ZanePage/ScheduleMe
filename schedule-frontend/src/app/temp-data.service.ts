import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Biz } from './biz';
import { Buisnesses } from './mockBiz';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  constructor() { }

  getBiz(): Observable<Biz[]> {
    const biz = of(Buisnesses);
    return biz;
  }

  getBizCat(cat: string): Observable<Biz[]> {
    const biz = Buisnesses.filter(b => b.cat === cat)!;
    return of(biz);
  }
}
