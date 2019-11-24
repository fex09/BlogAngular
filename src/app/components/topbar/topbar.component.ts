import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Input() section: string;
  @Output() sectionChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  setSection(sectionName: string): void {
    this.section = sectionName;
    this.sectionChange.emit(sectionName);
  }

}
