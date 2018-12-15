import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";
import { MouseData } from '../models/mouseData.model';
import { Subject } from 'rxjs';

const apiUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class MouseDataService {
  private mouseDataSet: MouseData[] = [];
  private mouseDataSetUpdated = new Subject<{ mouseData: MouseData[]}>();

  constructor(private http: HttpClient) { }

  addMouseData(avenger: string, clicks: number, hovers: number): any {
    const mouseData: MouseData = {
      avenger: avenger, 
      clicks: clicks, 
      hovers: hovers
    };
    this.http.post<{ mouseData: MouseData }>(apiUrl + "/mouseData", mouseData)
    .subscribe(response => {
        console.log(response);
        return response;
    });
}

  getData() {
    this.http.get<{ mouseData: MouseData[] }>(apiUrl + '/mouseData')
    .subscribe((mouseData) => {
      this.mouseDataSet = mouseData.mouseData;
      this.mouseDataSetUpdated.next({ mouseData: this.mouseDataSet });
    });
  }

  getMouseDataUpdateListener() {
    return this.mouseDataSetUpdated.asObservable();
  }
}
