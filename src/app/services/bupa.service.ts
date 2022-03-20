import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { orderDetailResponseModel } from '../models/orderDetailResponseModel';
import { Observable } from 'rxjs';
import { orderDetail } from '../models/orderDetail';

@Injectable({
  providedIn: 'root',
})
export class BupaService {
  apiUrl = "https://localhost:44361/api/OrderDetails";

  constructor(private httpClient: HttpClient) {}

  getAllByAll(): Observable<orderDetailResponseModel> {
    return this.httpClient.get<orderDetailResponseModel>(
      this.apiUrl+"/getallbyall"
    );
  }

  addBupas(orderDetails:orderDetail) {
    return this.httpClient.post(this.apiUrl+"/addbyall", orderDetails);
  }
}
