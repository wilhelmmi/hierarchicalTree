import { Component, OnInit, Input } from '@angular/core';
import detailData from '../../assets/test.json';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements OnInit {

  data = detailData;

  constructor() { }

  @Input() nodeName: string;

  ngOnInit() {
    console.log(this.data[0].names);
  }


}
