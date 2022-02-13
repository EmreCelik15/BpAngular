import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  product1: any = { name: 'Emre', surName: 'Çelik', age: 27, city: 'Ordu' };
  product2: any = { name: 'Faruk', surName: 'Çelik', age: 29, city: 'Ordu' };
  product3: any = { name: 'Havva', surName: 'Çelik', age: 59, city: 'Ordu' };

  products = [this.product1, this.product2, this.product3];
  constructor() {}

  ngOnInit(): void {}
}
