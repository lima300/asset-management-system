import React from "react";
import { TreeNodeComponent } from "./TreeNode";
import "./Tree.css";
import type { TreeNode } from "../../types";

export interface TreeProps {
  data: TreeNode[];
  onNodeClick?: (node: TreeNode) => void;
  onNodeToggle?: (node: TreeNode, isExpanded: boolean) => void;
}

export const Tree: React.FC<TreeProps> = ({
  data,
  onNodeClick,
  onNodeToggle,
}) => {
  return (
    <div className="tree">
      {data.map((node) => (
        <TreeNodeComponent
          key={node.id}
          node={node}
          level={0}
          onNodeClick={onNodeClick}
          onNodeToggle={onNodeToggle}
          indentSize={20}
        />
      ))}
    </div>
  );
};
