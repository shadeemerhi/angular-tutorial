import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onToggle: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onToggleView(name: string) {
    this.onToggle.emit(name)
  }

}
