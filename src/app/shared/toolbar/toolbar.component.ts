import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fpa-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  toggleNav() {
    this.navToggle.emit();
  }
}
