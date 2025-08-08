import React from "react";
import TreeNodeComponent from "./TreeNode";
import "./Tree.css";
import type { TreeNode } from "../../types";

export interface TreeProps {
  data: TreeNode[];
  onNodeToggle: (node: TreeNode, isExpanded: boolean) => void;
  onNodeClick: (node: TreeNode) => void;
  indentSize?: number;
}

export const Tree: React.FC<TreeProps> = ({
  data,
  onNodeToggle,
  onNodeClick,
  indentSize = 20,
}) => {
  return (
    <div className={`tree-container`}>
      {data.map((node) => (
        <TreeNodeComponent
          key={node.id}
          node={node}
          level={0}
          onNodeClick={onNodeClick}
          onNodeToggle={onNodeToggle}
          indentSize={indentSize}
        />
      ))}
    </div>
  );
};
