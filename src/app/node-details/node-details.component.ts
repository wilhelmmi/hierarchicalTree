import { Component, OnInit, Input } from '@angular/core';
import detailData from '../../assets/namesForTypes.json';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements OnInit {

  data = detailData;
  value = true;

  constructor() { }

  @Input() nodeName: string;

  ngOnInit() {
  }


}
