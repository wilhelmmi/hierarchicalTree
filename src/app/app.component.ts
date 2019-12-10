import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typeHierarchy';

  selectedName: string;

  getSelectedNodeName(name: string) {
    this.selectedName = name;
  }
}
