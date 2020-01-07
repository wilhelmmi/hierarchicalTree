import { NodeService } from './../services/node.service';
import { DetailService } from './../services/detail.service';
import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements OnInit {
  data: {}[] = [];
  countryCode: {};
  value = true;
  nodeName: string;
  show: string;

  constructor(private detailService: DetailService,
              private nodeService: NodeService) { }

  ngOnInit() {
    this.data = this.detailService.data;
    this.countryCode = this.detailService.country;
    this.nodeService.newNodeName.subscribe((newNodeName: string) => this.nodeName = newNodeName);
    this.nodeService.newValue.subscribe((newValue: string) => this.show = newValue);
  }

  showLabels() {
    this.show = 'labels';
  }

  showNames() {
    this.show = 'names';
  }

}
