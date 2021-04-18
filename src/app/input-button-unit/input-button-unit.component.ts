import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submitValue = new EventEmitter<string>();
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  submit(newTitle: string): void {
    this.submitValue.emit(newTitle);
  }
}
