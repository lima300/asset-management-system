import { useMemo, useState, useEffect } from "react";
import type { TreeNode } from "../../types";
import { Search } from "../Search/Search";
import { Tree } from "../Tree/Tree";
import "./TreeContainer.css";
import { filterTree } from "../../utils/treeBuilder";
import type { Filters } from "../FiltersButtonBar/FiltersButtonBar";

export interface TreeContainerProps {
  treeData: TreeNode[];
  filters?: Filters;
  onNodeClick: (node: TreeNode) => void;
  externalSearchValue?: string;
}

export const TreeContainer: React.FC<TreeContainerProps> = ({
  treeData,
  filters,
  onNodeClick,
  externalSearchValue,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  // Reset search value when external value changes (e.g., when company changes)
  useEffect(() => {
    if (externalSearchValue !== undefined) {
      setSearchValue(externalSearchValue);
    }
  }, [externalSearchValue]);

  const filteredTree = useMemo(() => {
    return filterTree(treeData, {
      search: searchValue,
      energySensors: filters?.energySensors ?? false,
      criticalStatus: filters?.criticalStatus ?? false,
    });
  }, [filters, searchValue, treeData]);

  return (
    <div className="tree-container">
      <Search value={searchValue} onChange={setSearchValue} />
      {filteredTree.length ? (
        <Tree
          data={filteredTree}
          onNodeClick={onNodeClick}
          onNodeToggle={(node: TreeNode, isExpanded: boolean) =>
            console.log("Toggled:", node.name, isExpanded)
          }
        />
      ) : (
        <div className="empty-tree">
          <span>Empty tree.</span>
        </div>
      )}
    </div>
  );
};
