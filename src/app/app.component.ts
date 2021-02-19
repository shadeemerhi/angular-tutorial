import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'udemy-course';
  name: string = 'Shadee';

  viewName: string  = 'Recipes';

  toggleShow(name: string) {
    this.viewName = name;
  }

  onToggle(name: string) {
    this.viewName = name;
  }
}
