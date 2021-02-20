import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'udemy-course';
  name: string = 'Shadee';

  viewName: string  = 'List';

  onNavigate(name: string) {
    this.viewName = name;
  }
}
