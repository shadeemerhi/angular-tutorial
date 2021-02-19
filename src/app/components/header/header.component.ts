import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() selectNavItem: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(name: string) {
    this.selectNavItem.emit(name)
  }
}
