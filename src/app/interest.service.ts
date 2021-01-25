import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YogaDescription } from './interfaces/yogadescription';


@Injectable({
  providedIn: 'root'
})
export class InterestService {
  private _url = "/assets/data/yogatext.json";


  constructor(private http: HttpClient) { }

  getYogaDescrption(): Observable<YogaDescription[]> {
    return this.http.get<YogaDescription[]>(this._url);
  }
}
