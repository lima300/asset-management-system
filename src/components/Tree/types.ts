export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  isExpanded?: boolean;
  data?: any; // Additional data for the node
}

export interface TreeProps {
  data: TreeNode[];
  onNodeClick?: (node: TreeNode) => void;
  onNodeToggle?: (node: TreeNode, isExpanded: boolean) => void;
  className?: string;
  indentSize?: number;
}

export interface TreeNodeProps {
  node: TreeNode;
  level: number;
  onNodeClick?: (node: TreeNode) => void;
  onNodeToggle?: (node: TreeNode, isExpanded: boolean) => void;
  indentSize: number;
}
