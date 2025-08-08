import { useParams } from "react-router-dom";
import { useCompanyData } from "../hooks/useCompanyData";
import type { TreeNode } from "../types";
import { Tree } from "../components/Tree/Tree";
import { buildTree } from "../utils/treeBuilder";
import { useMemo } from "react";

export const Company = () => {
  const { companyId } = useParams();
  const { locations, assets, isLoading } = useCompanyData(companyId);

  const treeData = useMemo(() => {
    if (!companyId || isLoading) return [];
    return buildTree(locations, assets);
  }, [companyId, isLoading, locations, assets]);

  return (
    <div>
      <Tree
        data={treeData}
        onNodeClick={(node: TreeNode) => console.log("Clicked:", node.name)}
        onNodeToggle={(node: TreeNode, isExpanded: boolean) =>
          console.log("Toggled:", node.name, isExpanded)
        }
      />
    </div>
  );
};
