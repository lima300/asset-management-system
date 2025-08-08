import React, { useState } from "react";
import "./Tree.css";
import type { TreeNode } from "../../types";

export interface TreeNodeProps {
  node: TreeNode;
  level: number;
  onNodeClick?: (node: TreeNode) => void;
  onNodeToggle?: (node: TreeNode, isExpanded: boolean) => void;
  indentSize: number;
}

const TreeNodeComponent: React.FC<TreeNodeProps> = ({
  node,
  level,
  onNodeClick,
  onNodeToggle,
  indentSize,
}) => {
  const [isExpanded, setIsExpanded] = useState(node.isExpanded ?? false);
  const hasChildren = node.children && node.children.length > 0;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      const newExpandedState = !isExpanded;
      setIsExpanded(newExpandedState);
      onNodeToggle?.(node, newExpandedState);
    }
  };

  const handleClick = () => {
    onNodeClick?.(node);
  };

  return (
    <div className="tree-node">
      <div
        className={`tree-node-content ${hasChildren ? "has-children" : ""}`}
        style={{ paddingLeft: `${level * indentSize}px` }}
        onClick={handleClick}
      >
        {hasChildren && (
          <button
            className={`tree-toggle ${isExpanded ? "expanded" : ""}`}
            onClick={handleToggle}
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <span className="toggle-icon">{isExpanded ? "▼" : "▶"}</span>
          </button>
        )}
        {!hasChildren && <div className="tree-spacer" />}
        <span className="tree-label">{node.name}</span>
      </div>

      {hasChildren && isExpanded && (
        <div className="tree-children">
          {node.children!.map((child) => (
            <TreeNodeComponent
              key={child.id}
              node={child}
              level={level + 1}
              onNodeClick={onNodeClick}
              onNodeToggle={onNodeToggle}
              indentSize={indentSize}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNodeComponent;
