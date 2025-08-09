import { useMemo, useState } from "react";
import type { TreeNode } from "../../types";
import { Search } from "../Search/Search";
import { Tree } from "../Tree/Tree";
import "./TreeContainer.css";
import { filterTree } from "../../utils/treeBuilder";
import type { Filters } from "../FiltersButtonBar/FiltersButtonBar";

export interface TreeContainerProps {
  treeData: TreeNode[];
  filters?: Filters;
}

export const TreeContainer: React.FC<TreeContainerProps> = ({
  treeData,
  filters,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

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
      <Tree
        data={filteredTree}
        onNodeClick={(node: TreeNode) => console.log("Clicked:", node.name)}
        onNodeToggle={(node: TreeNode, isExpanded: boolean) =>
          console.log("Toggled:", node.name, isExpanded)
        }
      />
    </div>
  );
};
