import { NodeService } from './services/node.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'typeHierarchy';

  selectedName: string;
  constructor(private nodeService: NodeService) {
  }

  ngOnInit(){
    this.nodeService.newNodeName.subscribe((newNodeName: string) => this.selectedName = newNodeName);
    console.log(this.selectedName);
  }

 /*  getSelectedNodeName(name: string) {
    this.selectedName = name;
  } */
}
