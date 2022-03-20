import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { orderDetail } from 'src/app/models/orderDetail';
import { orderDetailResponseModel } from 'src/app/models/orderDetailResponseModel';
import { BupaService } from 'src/app/services/bupa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(
    private bupaService: BupaService,
    private formBuilder: FormBuilder
  ) {}
  // datas = {};
  // dataList: orderDetail[]=[];
  // dataResponseModel: orderDetailResponseModel = {
  //   data: this.dataList,
  //   message: '',
  //   success: true,
  // };
  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      description: [''],
      name: [''],
      installment: [''],
      orderName: [''],
      price: [''],
    });
  }

  addBupas() {
    let orderDetailModel = Object.assign({}, this.productAddForm.value);
    this.bupaService.addBupas(orderDetailModel).subscribe((res) => {});
  }
}
