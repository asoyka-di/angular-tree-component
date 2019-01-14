import { Component, Input, ViewEncapsulation, TemplateRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
  selector: 'tree-node-content',
  encapsulation: ViewEncapsulation.None,
  template: `
  <img class="ne_icon" style="width: 24px; height: 24px; position: relative; bottom: 1px; right: 4px;" *ngIf="node.data.hasOwnProperty('icon')" [src]="node.icon" />
  <span *ngIf="!template">{{ node.displayField }}</span>
  <ng-container
    [ngTemplateOutlet]="template"
    [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index }">
  </ng-container>`,
})
export class TreeNodeContent {
  @Input() node: TreeNode;
  @Input() index: number;
  @Input() template: TemplateRef<any>;
}
