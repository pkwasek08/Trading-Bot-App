import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private mySidenav!: HTMLElement;
  private mainPage!: HTMLElement;

  constructor() {

  }

  ngOnInit(): void {
    this.mySidenav = document.getElementById('mySidenav')!;
    this.mainPage = document.getElementById('main')!;

  }

  openNav() {
    this.mySidenav.style.width = '250px';
    this.mainPage.style.opacity = '0.8';

  }

  closeNav() {
    this.mySidenav.style.width = '0px';
    this.mainPage.style.opacity = '1';
  }
}
