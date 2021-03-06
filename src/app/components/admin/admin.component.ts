import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { orderDetail } from 'src/app/models/orderDetail';
import { orderDetailResponseModel } from 'src/app/models/orderDetailResponseModel';
import { BupaService } from 'src/app/services/bupa.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private bupaService: BupaService) {}
  datas = {};
  dataList: orderDetail[] = [];
  dataResponseModel: orderDetailResponseModel = {
    data: this.dataList,
    message: '',
    success: true,
  };
  dataLoaded: boolean = false;

  ngOnInit() {
    this.getAllBupas();
  }

  getAllBupas() {
    this.bupaService.getAllByAll().subscribe(
      (response) => {
        console.log("ssss")
        this.dataResponseModel = response;
        this.dataLoaded = true;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
