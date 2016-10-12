import { Component, OnInit } from '@angular/core';
import { TreeModule } from 'angular2-tree-component';
import { TreeService } from './tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  nodes: any;
  options = { idField: 'name' };
  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.treeService.getTreeRoot().then(nodes => this.nodes = nodes);
  }

}
