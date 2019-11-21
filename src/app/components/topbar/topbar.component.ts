import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Input() sectionInput: string;
  @Output() sectionInputChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setSection(sectionName: string): void {
    this.sectionInput = sectionName;
    this.sectionInputChange.emit(sectionName);
  }

}
