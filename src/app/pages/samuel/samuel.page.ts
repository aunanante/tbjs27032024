import { Component } from '@angular/core';

@Component({
  selector: 'app-samuel',
  templateUrl: './samuel.page.html',
  styleUrls: ['./samuel.page.scss'],
})
export class SamuelPage  {
  isBlue: boolean = true;

  constructor() {}

  changeColor() {
    this.isBlue = !this.isBlue;
  }
}
