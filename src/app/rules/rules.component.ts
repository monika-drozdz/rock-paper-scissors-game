import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  @Output() isClosed = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onCloseRules() {
    this.isClosed.emit(true);
  }
}
