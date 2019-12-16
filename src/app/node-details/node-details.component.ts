import { NodeService } from './../services/node.service';
import { DetailService } from './../services/detail.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements OnInit {

  data: {}[] = [];
  value = true;
  constructor(private detailService: DetailService,
    private nodeService: NodeService) { }



  nodeName: string;

  ngOnInit() {
    this.data = this.detailService.data;
    this.nodeService.newNodeName.subscribe((newNodeName: string) => this.nodeName = newNodeName);

  }

}
