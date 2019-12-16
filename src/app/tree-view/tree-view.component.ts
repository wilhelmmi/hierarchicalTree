import { Component, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {NodeService} from '../services/node.service';
import { TreeNode, TreeModel, ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements AfterViewInit, OnInit {

  nodes: {}[] = [];
  constructor(private nodeService: NodeService) { }

  ngOnInit(){
    this.nodes = this.nodeService.nodes;
  }

  options: ITreeOptions = {

    useVirtualScroll: true,
    nodeHeight: 22
  };

  @ViewChild('tree', { static: true }) tree;
  @Output() selectedNodeName = new EventEmitter<string>();


  ngAfterViewInit() {
    const firstNode = this.tree.treeModel.roots[0];
    firstNode.expand();
  }


  public setExpandedNodes(expandedNodeIds: any) {
    this.tree.treeModel.expandedNodeIds = expandedNodeIds;
    // this.refresh();
  }
  public collapseAll() {
    const expandedNodeIds: any = {};
    this.setExpandedNodes(expandedNodeIds);
    this.ngAfterViewInit();
  }

  public expandAll() {
    let expandedNodeIds: any = {};
    for (const node of this.tree.treeModel.roots) {
      expandedNodeIds = this.updateNode(node, expandedNodeIds, true);
    }
    this.setExpandedNodes(expandedNodeIds);

  }
  private updateNode(node: TreeNode, expandedNodeIds: any, expand: boolean) {
    let newExp = expandedNodeIds;
    const children = node.children;
    if (children) {
      for (const child of children) {
        newExp = this.updateNode(child, newExp, expand);
      }
    }
    if (node.hasChildren) {
      return Object.assign({}, newExp, { [node.id]: expand });
    }
    return newExp;
  }
  filterTree(value: string, treeModel: TreeModel) {

    const foundResults: TreeNode[] = [];
    treeModel.filterNodes((node: TreeNode) => {
      const nodeName = node.data.name.toLowerCase();
      const searchValue = value.toLowerCase();
      const nodeFound = nodeName.includes(searchValue);
      if (nodeFound && node.hasChildren) {

        for (const child of node.children) {
          if (child.hasChildren) {
            foundResults.push(child);
          }
        }
        foundResults.push(node);

      }
      return nodeFound;
    });
    foundResults.forEach((item) => {
      item.children.forEach((child) => {
        child.show();
        child.ensureVisible();
      });
    });
  }

  getName(treeModel: TreeModel) {
    const nodeName = treeModel.getActiveNode().data.name;
    this.nodeService.newNodeName.emit(nodeName);
  }

}
