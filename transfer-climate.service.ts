import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferClimateService {
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

  constructor() {}

  changeData(data: any) {
    this.dataSource.next(data);
  }
}
