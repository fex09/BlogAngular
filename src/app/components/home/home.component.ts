import { Component, OnInit } from '@angular/core';

// component
import { AppComponent } from '../main/app.component';


@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  seleccionado: string;
  constructor(public myapp: AppComponent) {
  }

  ngOnInit() {
  }

  setSection(sectionName: string): void {
    this.myapp.pageSection = sectionName;
  }

}
