import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('btn1')
  btn1: ElementRef | any;

  @ViewChild('btn2')
  btn2: ElementRef | any;

  constructor(private router: Router) {}
  userName: string = 'admin';
  userPassword: string = 'admin';

  btnClick() {
    if (
      (this.btn1.nativeElement.value === this.userName) &&
      (this.btn2.nativeElement.value === this.userPassword)
    ) {
      this.router.navigate(['admin']);
    } else {
      alert('Hatalı Giriş');
    }
  }
  ngOnInit(): void {

  }
}
