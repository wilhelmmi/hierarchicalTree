import { EventEmitter } from '@angular/core';
import convertedData from '../../assets/convertetTypeHierarchy.json';

export class NodeService {

    nodes = [convertedData];

    newNodeName = new EventEmitter<string>();
}
