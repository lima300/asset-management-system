import React from "react";
import type { TreeProps } from "./types";
import TreeNodeComponent from "./TreeNode";
import "./Tree.css";

const Tree: React.FC<TreeProps> = ({
  data,
  onNodeClick,
  onNodeToggle,
  className = "",
  indentSize = 20,
}) => {
  return (
    <div className={`tree-container ${className}`}>
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

export default Tree;
