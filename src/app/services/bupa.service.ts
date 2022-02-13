import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { orderDetailResponseModel } from '../models/orderDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BupaService {
  apiUrl = 'https://localhost:44361/api/OrderDetails';

  constructor(private httpClient: HttpClient) {}

  getAllByAll() {
    return this.httpClient.get<orderDetailResponseModel>('https://localhost:44361/api/OrderDetails/getallbyall');
  }

  addBupas(obj: any) {
    return this.httpClient.post(this.apiUrl, obj);
  }
}
