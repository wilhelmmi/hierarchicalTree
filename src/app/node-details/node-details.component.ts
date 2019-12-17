import { NodeService } from './../services/node.service';
import { DetailService } from './../services/detail.service';
import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements OnInit {

  data: {}[] = [];
  value = true;
  nodeName: string;
  show: string;

  constructor(private detailService: DetailService,
              private nodeService: NodeService) { }

  ngOnInit() {
    this.data = this.detailService.data;
    this.nodeService.newNodeName.subscribe((newNodeName: string) => this.nodeName = newNodeName);
    this.nodeService.newValue.subscribe((newValue: string) => this.show = newValue);
  }

  showLabels() {
    this.show = 'labels';
    console.log(this.show);
  }
  showNames() {
    this.show = 'names';
    console.log(this.show);
  }

}
